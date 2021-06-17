import { Server, Socket } from "socket.io";
import { POWER_HOUR_EVENT } from "../constants/events";
import { SkipEvent } from "../events/SkipEvent";
import { PauseEvent } from "../events/PauseEvent";
import { PlayEvent } from "../events/PlayEvent";

const powerHourHandler = (io: Server, socket: Socket) => {
  const play = (payload: PlayEvent) => {
    socket.broadcast.to(payload.room).emit(POWER_HOUR_EVENT.PLAY, payload);
    console.log(payload);
  };

  const pause = (payload: PauseEvent) => {
    socket.broadcast.to(payload.room).emit(POWER_HOUR_EVENT.PAUSE, payload);
    console.log(payload);
  };

  const skip = (payload: SkipEvent) => {
    socket.broadcast.to(payload.room).emit(POWER_HOUR_EVENT.SKIP, payload);
    console.log(payload);
  };

  socket.on(POWER_HOUR_EVENT.PLAY, play);
  socket.on(POWER_HOUR_EVENT.PAUSE, pause);
  socket.on(POWER_HOUR_EVENT.SKIP, skip);
};

export default powerHourHandler;
