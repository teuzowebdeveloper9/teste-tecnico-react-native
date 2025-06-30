import { Message } from "./MessagesType";

export type ChatContextProps = {
  messages: Message[];
  addMessage: (message: Message) => void;
};
