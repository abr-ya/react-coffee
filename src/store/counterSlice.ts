import { create, type StateCreator } from "zustand";

type СounterState = {
  counter: number;
};

type СounterActions = {
  increment: () => void;
  decrement: () => void;
};

const counterSlice: StateCreator<СounterState & СounterActions> = (set, get) => ({
  counter: 0,
  decrement: () => {
    const { counter } = get();
    set({ counter: counter - 1 });
  },
  increment: () => {
    const { counter } = get();
    set({ counter: counter + 1 });
  },
});

export const useCounterStore = create<СounterState & СounterActions>(counterSlice);
