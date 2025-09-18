import { redis } from "../config/redis.js";
import { TrafficLog } from "../models/TrafficLog.js";

export const saveTrafficData = async (data) => {
  const { junctionId, vehicles, queueLength, signalPhase } = data;

  // Save latest state in Redis
  await redis.set(
    `junction:${junctionId}`,
    JSON.stringify({ vehicles, queueLength, signalPhase, timestamp: Date.now() })
  );

  // Save to MongoDB for history
  const log = new TrafficLog({ junctionId, vehicles, queueLength, signalPhase });
  await log.save();

  return log;
};

export const getLatestState = async () => {
  const keys = await redis.keys("junction:*");
  const states = [];

  for (const key of keys) {
    const state = await redis.get(key);
    if (state) states.push(JSON.parse(state));
  }

  return states;
};
