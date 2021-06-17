export class User {
  readonly socketId: string;
  name: string;

  constructor(socketId: string, name: string) {
    this.socketId = socketId;
    this.name = name;
  }
}
