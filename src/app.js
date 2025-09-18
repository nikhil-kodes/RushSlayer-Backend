import express from "express";
import trafficRoutes from "./routes/trafficRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/traffic", trafficRoutes);

export default app;
