import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { User } from "../interfaces/User";
import * as actions from "../actions/userActions";
import { UserAction } from "../interfaces/Actions";
import { UserReducer } from "../interfaces/Reducer";

interface FunctionalComponentExampleProps {
  users: Array<User>;
}

const FunctionalComponentExample: React.FunctionComponent<FunctionalComponentExampleProps> =
  (props: FunctionalComponentExampleProps): React.ReactElement<void> => {
    const { users } = props;

    // hooks example
    const dispatch: Dispatch<UserAction> = useDispatch();
    const moreUsers: Array<User> = useSelector(
      (state: UserReducer) => state.users
    );

    React.useEffect(() => {
      dispatch(actions.getUsers());
    }, []);

    return (
      <table id="users">
        <thead>
          <tr>
            <th>No.</th>
            {Object.keys(users[0]).map((key: keyof User, index: number) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index: number) => (
            <React.Fragment key={index}>
              <tr>
                <td>{index + 1}</td>
                {Object.keys(user).map((key: keyof User) => (
                  <td key={key}>{user[key]}</td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

export default FunctionalComponentExample;
