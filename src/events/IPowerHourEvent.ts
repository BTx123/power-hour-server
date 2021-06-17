import { User } from "../users/User";

export interface IEvent {
  readonly name: string;
  readonly sender: User;
  readonly room: string;
}
