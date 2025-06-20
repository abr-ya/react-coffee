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

export interface IOrderItem {
  id: number;
  name: string;
  quantity: number;
  size: "S" | "M" | "L";
}

export interface ICreateOrderPayload {
  address: string;
  orderItems: IOrderItem[];
}

export interface ICreateOrderResponse {
  success: boolean;
  message: string;
}
