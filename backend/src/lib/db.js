import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected successfully");
  } catch (error) {
    console.log("❌ Not connected to MongoDB");
    process.exit(1);
  }
};
