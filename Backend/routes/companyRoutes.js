import express from "express";
import {
  registerRecruiter,
  loginRecruiter,
} from "../controller/companyController.js";

const companyRouter = express.Router();

companyRouter.post("/register", registerRecruiter);
companyRouter.post("/login", loginRecruiter);

export default companyRouter;
