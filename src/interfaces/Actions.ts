import { User } from "./User";
import * as allActionTypes from "../types/actions";

type p = { [k in keyof typeof allActionTypes]: string };
export interface UserAction {
  type: string;
  users?: Array<User>;
  user?: User;
}
