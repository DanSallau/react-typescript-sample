import { UserAction } from "../interfaces/Actions";
import { createStore } from "redux";

import { UserReducer } from "../interfaces/Reducer";
import * as allActions from "../constants";

const initialState: UserReducer = {
  users: [],
};

function userReducer(
  state: UserReducer = initialState,
  action: UserAction
): UserReducer {
  switch (action.type) {
    case allActions.GET_USERS:
      return state;
    case allActions.GET_USER:
      return state;
    default:
      return state;
  }
}

export default createStore(userReducer);
