import mongoose from "mongoose";

const trafficSchema = new mongoose.Schema({
  junctionId: String,
  vehicles: Number,
  queueLength: Number,
  signalPhase: String,
  timestamp: { type: Date, default: Date.now }
});

export const TrafficLog = mongoose.model("TrafficLog", trafficSchema);
