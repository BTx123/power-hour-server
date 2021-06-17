import { User } from "../users/User";

export interface IMessage<T> {
  readonly sender: User;
  readonly data: T;
}
