export type CoffeeType = "cappuccino" | "latte" | "macchiato" | "americano";

export interface ICoffeeQueryParams {
  text?: string;
  type?: CoffeeType;
}

export interface ICoffee {
  id: number;
  name: string;
  subTitle: string;
  type: CoffeeType;
  price: number;
  image: string;
  description: string;
  rating: number;
}
