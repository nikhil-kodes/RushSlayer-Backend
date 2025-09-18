import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { redis } from "./config/redis.js";
import { trafficSocket } from "./sockets/trafficSocket.js";

const PORT = 4000;

// Connect to databases
connectDB();
redis; // triggers connection logs

// Setup server + socket
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Make socket.io available in controllers
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Initialize socket events
trafficSocket(io);

server.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
