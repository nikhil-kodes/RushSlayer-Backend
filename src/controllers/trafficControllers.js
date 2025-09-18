import { saveTrafficData } from "../services/trafficService.js";

export const updateTraffic = async (req, res) => {
  try {
    const data = req.body;
    const log = await saveTrafficData(data);

    // Emit event via Socket.io (available globally)
    req.io.emit("traffic-update", data);

    res.json({ status: "ok", log });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
