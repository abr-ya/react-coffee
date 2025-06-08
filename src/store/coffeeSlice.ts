import { create, type StateCreator } from "zustand";
import axios, { AxiosError } from "axios";
import { devtools, persist } from "zustand/middleware";

import type { ICoffee, ICoffeeQueryParams, IOrderItem } from "../interfaces/coffee.interfaces";

const BASE_URL = "https://purpleschool.ru/coffee-api/";

interface ICoffeeState {
  coffeeList?: ICoffee[];
  cart: IOrderItem[];
  address?: string;
}

interface ICoffeeActions {
  getCoffeeList: (params?: ICoffeeQueryParams) => void;
  setAddress: (address: string) => void;
  addToCart: (item: ICoffee) => void;
}

interface ICoffeeSlice extends ICoffeeState, ICoffeeActions {}
type CoffeeSliceType = StateCreator<ICoffeeSlice, [["zustand/devtools", never], ["zustand/persist", unknown]]>;

const coffeeSlice: CoffeeSliceType = (set, get) => ({
  coffeeList: undefined,
  cart: [],
  address: undefined,
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
  setAddress: (address) => set({ address }),
  addToCart: (item) => {
    const { cart } = get();
    const normalizedItem: IOrderItem = { id: item.id, name: `${item.name} ${item.subTitle}`, quantity: 1 };
    set({ cart: [...cart, normalizedItem] });
  },
  clearCart: () => set({ cart: [] }),
});

export const useCoffeeStore = create<ICoffeeSlice>()(
  devtools(
    persist(coffeeSlice, {
      name: "coffeeStore",
      partialize: (state) => ({ cart: state.cart, address: state.address }),
    }),
    {
      name: "coffeeStore",
    },
  ),
);
