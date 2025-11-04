import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import {serve} from "inngest/express"
import { inngest } from "./lib/inngest.js";


const app = express();
const PORT = ENV.PORT;

const __dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}));

app.use("/api/inngest",serve({client: inngest, functions}))



app.get("/test", (req, res) => {
    res.status(201).json({ message: "testing 1" });
});
app.get("/testing", (req, res) => {
    res.status(201).json({ message: "testing2" });
});


if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Port is listening to ${PORT}`);
        });
    } catch (error) {
        console.log("Error at starting server",error);
    }

}
startServer()