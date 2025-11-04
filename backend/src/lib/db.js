import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDB = async () =>{
    try {
        await mongoose.connect(ENV.DB_URL)
        console.log("✅Connected sucessfully");
        
    } catch (error) {
        console.log("❌ Not connected to mongoDb");
        process.exit(1)
    }
}