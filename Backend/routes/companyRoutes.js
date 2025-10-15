import express from "express";
import {
  registerRecruiter,
  loginRecruiter,
  getCompanyData,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  changeJobApplicationStatus,
  changeJobVisibility,
} from "../controller/companyController.js";

const companyRouter = express.Router();

companyRouter.post("/register", registerRecruiter);
companyRouter.post("/login", loginRecruiter);
companyRouter.get("/company",getCompanyData)
companyRouter.post("/post-job",postJob)
companyRouter.get("/applicants",getCompanyJobApplicants)
companyRouter.get("/list-jobs",getCompanyPostedJobs)
companyRouter.post("/change-status", changeJobApplicationStatus);
companyRouter.post("/change-visibility", changeJobVisibility);

export default companyRouter;
