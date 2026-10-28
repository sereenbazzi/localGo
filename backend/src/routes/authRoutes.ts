
import { Router, Response } from "express";
import { register, login } from "../controllers/authController";
import {
  authenticateToken,
  AuthenticatedRequest
} from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";
const router = Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get(
  "/me",
  authenticateToken,
  (req: AuthenticatedRequest, res: Response) => {
    res.status(200).json({
      message: "Authenticated successfully",
      user: req.user
    });
  }
);
router.get(
  "/dmc-only",
  authenticateToken,
  authorizeRoles("DMC"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome! You have DMC access.",
    });
  }
);

export default router;
