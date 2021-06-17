import { User } from "../users/User";
import { IMessage } from "./IMessage";

export class Message implements IMessage<string> {
  readonly sender: User;
  readonly data: string;

  constructor(sender: User, data: string) {
    this.sender = sender;
    this.data = data;
  }

  toString(): string {
    return `${this.sender.name}: ${this.data}`;
  }
}
