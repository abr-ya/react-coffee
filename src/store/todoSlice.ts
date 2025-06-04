import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface IToDoItem {
  title: string;
  isDone: boolean;
}

interface IToDoState {
  todos: IToDoItem[];
}

interface IToDoActions {
  addTodo: (title: string) => void;
  isDoneToggle: (index: number) => void;
}

const toDoSlice: StateCreator<IToDoState & IToDoActions, [["zustand/devtools", never]]> = (set, get) => ({
  todos: [
    { title: "CreateSlice", isDone: true },
    { title: "ShowTodos", isDone: false },
  ],
  addTodo: (title: string) => {
    const { todos } = get();
    set({ todos: [...todos, { title, isDone: false }] }, false, `add ${title}`);
  },
  isDoneToggle: (index: number) => {
    console.log("toggle", index);
    const { todos } = get();
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1),
    ];
    return set({ todos: newTodos }, undefined, `changeStatus of ${todos[index].title} to ${!todos[index].isDone}`);
  },
});

export const useToDoStore = create<IToDoState & IToDoActions>()(
  devtools((...args) => ({
    ...toDoSlice(...args),
  })),
);
