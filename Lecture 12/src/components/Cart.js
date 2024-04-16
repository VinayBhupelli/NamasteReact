import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // const store = useSelector((store) => store); // subscribe to entire store not required
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 w-6/12 m-auto">
      <div className="text-2xl flex justify-between">
        <span className="p-4 font-bold">Cart</span>
        <button
          className="bg-lime-200 text-lg px-4 mx-[20px] h-12 rounded-lg"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="">
        {cartItems.length === 0 && (
          <h1 className="m-20 font-bold">
            {"Cart is Empty 🛒 Try adding Food Items"}
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
