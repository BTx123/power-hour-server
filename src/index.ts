import express from "express";
import helmet from "helmet";
// import cookieSession from "cookie-session";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import index from "./routes/index.js";
import registerPowerHourHandlers from "./handlers/powerHourHandler.js";
import { Message } from "./messages/Message.js";
import { USER_EVENT } from "./constants/events.js";

const app = express();
const port = process.env.PORT || 3001;

const server = createServer(app);
const io = new Server(server, {
  cors: {},
});

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["debugging"],

//     // Cookie Options
//     maxAge: 60 * 60 * 1000, // 1 hour
//   })
// );

app.use(index);

io.on("connection", (socket: Socket) => {
  registerPowerHourHandlers(io, socket);

  console.log(`User connected on socket ${socket.id}`);

  socket.emit(USER_EVENT.CONNECT, socket.id);

  socket.on("userMessage", (userMessage: Message) => {
    console.log("User Message:", userMessage);
    io.emit("userMessage", userMessage);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected from socket ${socket.id}`);
    socket.broadcast.emit(USER_EVENT.DISCONNECT, socket.id);
  });
});

server.listen(port, () => {
  console.log(`🚀 Power Hour Server listening on http://localhost:${port}`);
});
