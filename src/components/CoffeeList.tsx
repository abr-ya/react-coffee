import { useEffect } from "react";
import { useCoffeeStore } from "../store/coffeeSlice";

const CoffeeList = () => {
  const { getCoffeeList, coffeeList } = useCoffeeStore();
  console.log(coffeeList);

  useEffect(() => {
    getCoffeeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>CoffeeList ({coffeeList?.length || "..."})</div>;
};

export default CoffeeList;
