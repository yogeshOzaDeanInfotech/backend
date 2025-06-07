import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const PORT = 4000;
const name = process.env.NAME;
const app = express();

// middleware for cors
app.use(
    cors({
        origin: ["http://localhost:5173", "http://43.204.219.136"],
    })
);

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`);
});

let users = [
    { name: name, email: "yogesh@gmail.com" },
    { name: "virat", email: "virat@gmail.com" },
    { name: "dhoni", email: "dhoni@gmail.com" },
    { name: "deepak", email: "deepak@gmail.com" },
    { name: "rahul", email: "rahul@gmail.com" },
];

app.get("/api/users", (req, res) => {
    res.status(200).json({
        status: true,
        users,
    });
});
