import * as actions from "../constants";
import { UserAction } from "../interfaces/Actions";

export const getUsers = (): UserAction => {
  return { type: actions.GET_USERS };
};

export const getUser = (): UserAction => {
  return { type: actions.GET_USER };
};
