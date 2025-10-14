import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import companyRouter from "./routes/companyRoutes.js";

const app = express();
const port = process.env.PORT || 8000;
connectDB();

const allowedOrigin = ["http://localhost:5173"];

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: allowedOrigin, credentials: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/recruiter", companyRouter);

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
