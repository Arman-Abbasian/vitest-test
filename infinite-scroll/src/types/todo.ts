import { User } from "./User";

export type Todo = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
  user?: User;
};
