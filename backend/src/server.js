import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

const app = express();
const PORT = ENV.PORT;

const __dirname = path.resolve();


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

app.listen(PORT, () => {
    console.log(`Port is listening to ${PORT}`);
});