import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

// Register User
export const Register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing information" });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "Email has already an account.",
      });
    }
    const hassedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hassedPassword,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "Missing details." });
    }
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.json({ success: false, message: "User not found." });
    }

    const pass = await bcrypt.compare(password, existingUser.password);
    if (!pass) {
      return res.json({ success: false, message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    if (existingUser && pass) {
      return res.json({ success: true, message: "Login successful" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged out" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};