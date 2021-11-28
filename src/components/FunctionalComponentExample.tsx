import * as React from "react";
import { User } from "../interfaces/User";

interface FunctionalComponentExampleProps {
  users: Array<User>;
}

const FunctionalComponentExample: React.FunctionComponent<FunctionalComponentExampleProps> =
  (props: FunctionalComponentExampleProps): React.ReactElement<void> => {
    const { users } = props;

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
