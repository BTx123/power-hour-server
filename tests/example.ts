import { createServer } from "http";
import { AddressInfo } from "net";
import { io as Client, Socket as ClientSocket } from "socket.io-client";
import { Server, Socket as ServerSocket } from "socket.io";
import { assert, expect } from "chai";

describe("example test", () => {
  it("should return hello world", () => {
    const result = "Hello World!";
    expect(result).to.equal("Hello World!");
  });
});

describe("my awesome project", () => {
  let io: Server, serverSocket: ServerSocket, clientSocket: ClientSocket;

  before((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const address = httpServer.address() as AddressInfo;
      const port = address.port;
      clientSocket = Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  after(() => {
    io.close();
    clientSocket.close();
  });

  it("should work", (done) => {
    clientSocket.on("hello", (arg: string) => {
      assert.equal(arg, "world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  it("should work (with ack)", (done) => {
    serverSocket.on("hi", (cb: (arg0: string) => void) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg: string) => {
      assert.equal(arg, "hola");
      done();
    });
  });
});
