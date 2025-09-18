import { getLatestState } from "../services/trafficService.js";

export const trafficSocket = (io) => {
  io.on("connection", async (socket) => {
    console.log("Frontend connected:", socket.id);

    // Send latest Redis states to new client
    const states = await getLatestState();
    states.forEach((state) => {
      socket.emit("traffic-update", state);
    });

    socket.on("disconnect", () => {
      console.log("Frontend disconnected:", socket.id);
    });
  });
};
