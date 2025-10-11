import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, min: 8, max: 16, required: true },
  role: { type: String, enum: ["user", "recruiter"], default: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isAccountVerified: { type: Boolean, default: false },
  verifyOtp: { type: String, default: "" },
  forgotPasswordOtp: { type: String, default: "" },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
