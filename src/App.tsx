import { Flex } from "antd";

import Counter from "./components/Counter";
import CoffeeList from "./components/CoffeeList";
import "./App.css";

const App = () => (
  <Flex className="wrapper" vertical>
    <CoffeeList />
    <Counter />
  </Flex>
);

export default App;
