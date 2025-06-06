import { Flex } from "antd";

import Counter from "./components/Counter";
import CoffeeList from "./components/CoffeeList";
import CoffeeSearch from "./components/CoffeeSearch";
import "./App.css";

const App = () => (
  <Flex className="wrapper" vertical>
    <CoffeeSearch />
    <CoffeeList />
    <Counter />
  </Flex>
);

export default App;
