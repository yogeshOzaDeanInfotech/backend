import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

// simple request logger
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const PORT = 4000;
const name = process.env.NAME;
const app = express();

// log all incoming requests
app.use(requestLogger);

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

// simple Prometheus metrics endpoint
app.get("/metrics", (req, res) => {
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage().rss;
    res.set("Content-Type", "text/plain");
    res.send(`# HELP node_uptime_seconds Uptime of the process in seconds
# TYPE node_uptime_seconds gauge
node_uptime_seconds ${uptime}
# HELP node_memory_usage_bytes Process memory usage
# TYPE node_memory_usage_bytes gauge
node_memory_usage_bytes ${memoryUsage}
`);
});
