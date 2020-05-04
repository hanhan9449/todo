import { v4 as uuidv4 } from 'uuid';
export class Todo {
  _id: string;
  title: string;
  createdAt: number;
  listUUID: string;
  desc: string;
  completedFlag: boolean;
  completedAt: number;
  dueAt: number;
  planAt: number;
  notifyMe = false;

  constructor(title: string, listUUID?: string) {
    this._id = uuidv4();
    this.title = title;
    this.listUUID = listUUID;
    this.completedFlag = false;
  }
}
export class List {
  _id: string;
  title: string;
  createdAt: number;

  constructor(title: string) {
    this._id = uuidv4();
    this.title = title;
  }
}
