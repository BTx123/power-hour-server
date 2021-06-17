import { IEvent } from "./IPowerHourEvent";
import { POWER_HOUR_EVENT } from "../constants/events";
import { User } from "../users/User";

export class PlayEvent implements IEvent {
  readonly name: string = POWER_HOUR_EVENT.PLAY;
  readonly sender: User;
  readonly room: string;

  constructor(room: string, sender: User) {
    this.room = room;
    this.sender = sender;
  }
}
