import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type СounterState = {
  counter: number;
};

type СounterActions = {
  increment: () => void;
  decrement: () => void;
};

const counterSlice: StateCreator<СounterState & СounterActions, [["zustand/devtools", never]]> = (set, get) => ({
  counter: 0,
  decrement: () => {
    const { counter } = get();
    set({ counter: counter - 1 }, false, "decrement");
  },
  increment: () => {
    const { counter } = get();
    set({ counter: counter + 1 }, false, "increment");
  },
});

export const useCounterStore = create<СounterState & СounterActions>()(devtools(counterSlice));
