import { create, type StateCreator } from "zustand";
import axios, { AxiosError } from "axios";
import { devtools } from "zustand/middleware";

import type { ICoffee, ICoffeeQueryParams } from "../src/interfaces/coffee.interfaces";

const BASE_URL = "https://purpleschool.ru/coffee-api/";

interface ICoffeeState {
  coffeeList?: ICoffee[];
}

interface ICoffeeActions {
  getCoffeeList: (params?: ICoffeeQueryParams) => void;
}

interface ICoffeeSlice extends ICoffeeState, ICoffeeActions {}

const coffeeSlice: StateCreator<ICoffeeSlice, [["zustand/devtools", never]]> = (set) => ({
  coffeeList: undefined,
  getCoffeeList: async (params?: ICoffeeQueryParams) => {
    try {
      const { data } = await axios.get<ICoffee[]>(BASE_URL, { params });
      set({ coffeeList: data }, false, "setCoffeeList");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  },
});

export const useCoffeeStore = create<ICoffeeSlice>()(devtools(coffeeSlice));
