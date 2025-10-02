import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error connecting to database");
  });
  await mongoose.connect(`${process.env.MONGO_URI}`);
};
