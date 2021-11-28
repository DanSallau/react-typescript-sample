import * as React from "react";
import { User } from "../interfaces/User";

interface ClassComponentExampleProps {
  users: Array<User>;
}

interface ClassComponentExampleState {}

export default class ClassComponentExample extends React.Component<
  ClassComponentExampleProps,
  ClassComponentExampleState
> {
  constructor(props: ClassComponentExampleProps) {
    super(props);
  }

  componentDidUpdate(
    prevProps: ClassComponentExampleProps,
    prevState: ClassComponentExampleState
  ) {
    // handle props or state change here
  }

  render() {
    const { users } = this.props;
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
  }
}
