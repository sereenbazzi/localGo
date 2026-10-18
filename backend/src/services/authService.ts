import bcrypt from "bcrypt";
import { pool } from "../config/database";

export type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
  role: "DMC" | "AGENCY";
};

export async function registerUser(input: RegisterInput) {
  const { fullName, email, password, role } = input;

  // Hash the password before saving it.
  const passwordHash = await bcrypt.hash(password, 12);

  // Use parameters instead of inserting values directly into SQL.
  const result = await pool.query(
    `INSERT INTO users (full_name, email, password_hash, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, full_name, email, role, created_at`,
    [fullName.trim(), email.trim().toLowerCase(), passwordHash, role]
  );

  return result.rows[0];
}

export async function loginUser(email: string, password: string) {
  // Search for the user using their email.
  const result = await pool.query(
    `SELECT id, full_name, email, password_hash, role
     FROM users
     WHERE email = $1`,
    [email.trim().toLowerCase()]
  );

  const user = result.rows[0];

  // Return null if the email doesn't exist.
  if (!user) {
    return null;
  }

  // Compare the submitted password with its stored hash.
  const passwordMatches = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!passwordMatches) {
    return null;
  }

  // Never return the password hash.
  return {
    id: user.id,
    fullName: user.full_name,
    email: user.email,
    role: user.role
  };
}
