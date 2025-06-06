import { useState } from "react";
import { useCoffeeStore } from "../store/coffeeSlice";
import { Input } from "antd";

const CoffeeSearch = () => {
  const { getCoffeeList } = useCoffeeStore();
  const [text, setText] = useState<string>("");

  const handleSearch = (text: string) => {
    setText(text);
    if (text) {
      getCoffeeList({ text });
    } else {
      getCoffeeList();
    }
  };

  return <Input placeholder="Search" value={text} onChange={(e) => handleSearch(e.target.value)} />;
};

export default CoffeeSearch;
