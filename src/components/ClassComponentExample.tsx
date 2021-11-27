import * as React from "react";

interface ClassComponentExampleProps {}

interface ClassComponentExampleState {}

export default class ClassComponentExample extends React.Component<
  ClassComponentExampleProps,
  ClassComponentExampleState
> {
  render() {
    return <h1>Someone </h1>;
  }
}
