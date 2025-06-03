import { Card, Checkbox } from "antd";
import { useToDoStore } from "../store/todoSlice";

const ToDoList = () => {
  const { todos, isDoneToggle } = useToDoStore();

  return (
    <>
      {todos.map((todo, index) => (
        <Card className="card" key={todo.title}>
          <Checkbox checked={todo.isDone} onChange={() => isDoneToggle(index)} />
          <span>{todo.title}</span>
        </Card>
      ))}
    </>
  );
};

export default ToDoList;
