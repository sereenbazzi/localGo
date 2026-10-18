
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { registerUser, loginUser } from "../services/authService";

export async function register(req: Request, res: Response) {
  try {
    const { fullName, email, password, role } = req.body;

    // Validate required fields and types.
    if (
      typeof fullName !== "string" ||
      !fullName.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      password.length < 8
    ) {
      return res.status(400).json({
        message: "Invalid registration data. Password must be at least 8 characters."
      });
    }

    // Only DMC and Agency can register publicly.
    if (role !== "DMC" && role !== "AGENCY") {
      return res.status(400).json({
        message: "Role must be DMC or AGENCY."
      });
    }

    const user = await registerUser({
      fullName,
      email,
      password,
      role
    });

    return res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error: unknown) {
    // PostgreSQL error code 23505 means unique constraint violation.
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return res.status(409).json({
        message: "Email already registered."
      });
    }

    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Internal server error."
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body ?? {};

    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required."
      });
    }

    const user = await loginUser(email, password);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password."
      });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      secret,
      { expiresIn: "1h", algorithm: "HS256" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error."
    });
  }
}
