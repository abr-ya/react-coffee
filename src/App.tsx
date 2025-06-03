import { Flex } from "antd";

import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => (
  <Flex className="wrapper" vertical>
    <ToDoList />
    <Counter />
  </Flex>
);

export default App;
