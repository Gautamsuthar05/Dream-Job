import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
export const registerRecruiter = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if recruiter already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "Recruiter already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const recruiter = new userModel({
    name,
    email,
    password: hashedPassword,
    role: "recruiter",
  });

  await recruiter.save();
  res.status(201).json({ message: "Recruiter registered successfully" });
};

export const loginRecruiter = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({ token, role: user.role });
};

// Get company data
export const getCompanyData = async (req, res) => {};

// Post a new job
export const postJob = async (req, res) => {};

// Get company Job Applicants
export const getCompanyJobApplicants = async (req, res) => {};

// Get company PostedJob
export const getCompanyPostedJobs = async (req, res) => {};

// change job application status
export const changeJobApplicationStatus = async (req, res) => {};

//change job visibility
export const changeJobVisibility = async (req, res) => {};
