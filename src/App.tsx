import { Flex } from "antd";

import { CoffeeCart, CoffeeList, CoffeeSearch, Counter } from "./components/index";
import "./App.css";

const App = () => (
  <Flex className="wrapper" vertical>
    <CoffeeSearch />
    <Flex>
      <CoffeeList />
      <CoffeeCart />
    </Flex>
    <Counter />
  </Flex>
);

export default App;
