import express from "express";
import Register from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/register", Register);

export default authRouter;
