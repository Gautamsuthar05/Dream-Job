import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 8000;
connectDB();

const allowedOrigin = ["http://localhost:5173"];

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: allowedOrigin, credentials: true }));

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
