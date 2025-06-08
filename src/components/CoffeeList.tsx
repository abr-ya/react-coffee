import { useEffect } from "react";
import { useCoffeeStore } from "../store/coffeeSlice";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = () => {
  const { getCoffeeList, coffeeList } = useCoffeeStore();

  useEffect(() => {
    getCoffeeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {coffeeList ? (
        <div className="cardsList">
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CoffeeList;
