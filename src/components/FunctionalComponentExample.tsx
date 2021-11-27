import * as React from "react";

interface FunctionalComponentExampleProps {}
const FunctionalComponentExample: React.FunctionComponent<FunctionalComponentExampleProps> =
  (props: FunctionalComponentExampleProps): React.ReactElement<void> => {
    return <h1>Someone</h1>;
  };

export default FunctionalComponentExample;
