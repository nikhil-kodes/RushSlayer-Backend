import Redis from "ioredis";

export const redis = new Redis(); // default: 127.0.0.1:6379

redis.on("connect", () => console.log("✅ Redis connected"));
redis.on("error", (err) => console.error("❌ Redis error", err));
