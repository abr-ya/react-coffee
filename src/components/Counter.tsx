import { Button, Flex } from "antd";

import { useCounterStore } from "../store/counterSlice";

const Counter = () => {
  const { counter, decrement, increment } = useCounterStore();

  return (
    <Flex align="center" justify="center" gap="middle">
      <Button onClick={decrement}>-</Button>
      <span>{counter}</span>
      <Button onClick={increment}>+</Button>
    </Flex>
  );
};

export default Counter;
