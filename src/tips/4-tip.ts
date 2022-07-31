// #4: Conditional typing using typescript generic
interface User {
  id: string;
  age: number;
  name: string;
}

enum MessageType {
  Message,
  Photo,
  File,
}

interface ChatCommon<T extends MessageType = MessageType.Message> {
  id: string;
  sender: User;
  messageType: T;
  created?: Date;
  updated?: Date;
}

export interface Message {
  content: string;
}

export interface File {
  file: string;
}

export interface Photo {
  photo: string;
}

export type ChatProps<T extends MessageType> = T extends MessageType.Message
  ? ChatCommon<T> & Message
  : T extends MessageType.Photo
  ? ChatCommon<T> & Photo
  : T extends MessageType.File
  ? ChatCommon<T> & File
  : never;

type ChatType = MessageType.Message | MessageType.Photo | MessageType.File;

export type Chat<T = MessageType.Message> = ChatProps<T extends ChatType ? T : never>;

const message: Chat = {
  id: 'a',
  content: 'hello world',
  messageType: MessageType.Message,
  created: new Date(),
  sender: {
    age: 20,
    id: 'b',
    name: 'Daniel',
  },
};

console.log(message);
