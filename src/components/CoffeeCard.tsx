import type { ICoffee } from "../src/interfaces/coffee.interfaces";

interface ICoffeeCard {
  data: ICoffee;
}

const CoffeeCard = ({ data }: ICoffeeCard) => <div>{data.name}</div>;

export default CoffeeCard;
