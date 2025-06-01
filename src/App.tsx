import { Button, Flex } from "antd";

import "./App.css";

const App = () => {
  const clickHandler = () => {
    console.log("!");
  };

  return (
    <Flex vertical>
      Hello, World!
      <Button type="primary" onClick={clickHandler}>
        Primary Button
      </Button>
    </Flex>
  );
};

export default App;
