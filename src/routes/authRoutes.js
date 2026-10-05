import { Router } from "express";
import passport from "passport";
import { register,login,logout,authStatus,setup2FA,reset2FA,verify2FA } from "../controllers/authControllers.js";

const router = Router();

// Registration Route
router.post("/register", register);

// Login Route
router.post("/login",passport.authenticate("local"), login );
    
// Auth Status Route
router.get("/status", authStatus);

// Logout Route
router.post("/logout", logout);

// 2fa setup
router.post("/2fa/setup",
    (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(401).json({message: "Unauthorized user"});
}, setup2FA);

// Verify Route
router.post("/2fa/verify",
    (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.status(401).json({message: "Unauthorized user"});
    },verify2FA);
// Reset Route
router.post("/2fa/reset", 
    (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.status(401).json({message: "Unauthorized user"});
    }
        ,reset2FA); 

export default router;