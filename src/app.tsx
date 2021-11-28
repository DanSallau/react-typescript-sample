import * as React from "react";
import FunctionalComponent from "./components/FunctionalComponentExample";
import ClassComponent from "./components/ClassComponentExample";
import dataGenerator from "./utils/dataGenerator";
import { User } from "./interfaces/User";

enum ComponentType {
  functional = "FUNCTIONAL",
  class = "CLASS",
}

export default (): React.ReactElement<void> => {
  const [users, setUsers] = React.useState<Array<User>>(dataGenerator());
  const [componentType, setComponentType] = React.useState<ComponentType>(
    ComponentType.class
  );

  return componentType === ComponentType.class ? (
    <ClassComponent users={users} />
  ) : (
    <FunctionalComponent users={users} />
  );
};
