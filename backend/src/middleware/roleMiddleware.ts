
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./authMiddleware";

type UserRole = "DMC" | "AGENCY" | "ADMIN";

export const authorizeRoles = (...allowedRoles: UserRole[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
   
    if (!req.user) {
      res.status(401).json({
        message: "Authentication required",
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        message: "Access denied: insufficient permissions",
      });
      return;
    }

    
    next();
  };
};
