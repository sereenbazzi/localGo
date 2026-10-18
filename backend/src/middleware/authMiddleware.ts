
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: "DMC" | "AGENCY" | "ADMIN";
  };
}

export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: "Authentication token required."
    });
    return;
  }

  const token = authHeader.slice(7).trim();

  if (!token) {
    res.status(401).json({
      message: "Authentication token required."
    });
    return;
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error("JWT_SECRET is not configured");
    res.status(500).json({
      message: "Internal server error."
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, secret, {
      algorithms: ["HS256"]
    }) as JwtPayload;

    if (
      !Number.isInteger(decoded.id) ||
      decoded.id <= 0 ||
      !["DMC", "AGENCY", "ADMIN"].includes(decoded.role)
    ) {
      res.status(401).json({
        message: "Invalid authentication token."
      });
      return;
    }

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();
  } catch {
    res.status(401).json({
      message: "Invalid or expired authentication token."
    });
  }
}
