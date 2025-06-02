import { Flex } from "antd";

import Counter from "./components/Counter";
import "./App.css";

const App = () => (
  <Flex className="wrapper" vertical>
    <Counter />
  </Flex>
);

export default App;
