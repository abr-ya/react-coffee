import { create, type StateCreator } from "zustand";

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

const toDoSlice: StateCreator<IToDoState & IToDoActions> = (set, get) => ({
  todos: [
    { title: "CreateSlice", isDone: true },
    { title: "ShowTodos", isDone: false },
  ],
  addTodo: (title: string) => {
    const { todos } = get();
    set({ todos: [...todos, { title, isDone: false }] });
  },
  isDoneToggle: (index: number) => {
    console.log("toggle", index);
    const { todos } = get();
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1),
    ];
    set({ todos: newTodos });
  },
});

export const useToDoStore = create<IToDoState & IToDoActions>((...args) => ({
  ...toDoSlice(...args),
}));
