const PREFIX = {
  POWER_HOUR: "powerhour",
  USER: "user",
  LOBBY: "lobby",
};

const createEvent = (category: string, event: string): string => {
  return `${category}:${event.toLowerCase()}`;
};

const createPowerHourEvent = (event: string): string =>
  createEvent(PREFIX.POWER_HOUR, event);

const createUserEvent = (event: string): string =>
  createEvent(PREFIX.USER, event);

const createLobbyEvent = (event: string): string =>
  createEvent(PREFIX.LOBBY, event);

export const POWER_HOUR_EVENT = {
  PLAY: createPowerHourEvent("play"),
  PAUSE: createPowerHourEvent("pause"),
  SKIP: createPowerHourEvent("skip"),
};

export const USER_EVENT = {
  CONNECT: createUserEvent("connect"),
  DISCONNECT: createUserEvent("disconnect"),
};

export const LOBBY_EVENT = {
  JOIN: createLobbyEvent("join"),
  LEAVE: createLobbyEvent("leave"),
  CREATE: createLobbyEvent("create"),
  DELETE: createLobbyEvent("leave"),
};
