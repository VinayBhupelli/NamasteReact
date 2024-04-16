import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setbtname] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-28" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 text-lg font-bold">
            Online Status: {OnlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>

          <button
            className="px-4 text-lg font-semibold"
            onClick={() => {
              btnname === "Login" ? setbtname("Logout") : setbtname("Login");
            }}
          >
            {btnname}
          </button>
          <li className="px-4 text-lg font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
