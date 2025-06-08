import { Button, Input } from "antd";
import { useCoffeeStore } from "../store/coffeeSlice";

const CoffeeCart = () => {
  const { address, cart, clearCart, createOrder, setAddress } = useCoffeeStore();

  const createOrderHandler = () => {
    console.log("createOrderHandler");
    createOrder();
  };
  const clearCartHandler = () => {
    console.log("clearCartHandler");
    clearCart();
  };

  return (
    <aside className="cart">
      <h2>My preferences</h2>
      {cart ? (
        <>
          {cart.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
          <Input placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)} />
          <Button onClick={createOrderHandler} disabled={!address || !cart.length} type="primary">
            Create Order
          </Button>
          <Button onClick={clearCartHandler}>Clear cart</Button>
        </>
      ) : (
        <span>Your cart is empty</span>
      )}
    </aside>
  );
};

export default CoffeeCart;
