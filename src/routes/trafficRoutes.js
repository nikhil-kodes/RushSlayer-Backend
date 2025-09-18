import express from "express";
import { updateTraffic } from "../controllers/trafficController.js";

const router = express.Router();

// Simulation sends POST /api/traffic/update
router.post("/update", updateTraffic);

export default router;
