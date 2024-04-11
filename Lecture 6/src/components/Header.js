import { useState } from "react";
import logo from "../../logo.jpg";

const Header = () => {
  const [btnname, setbtname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnname === "Login" ? setbtname("Logout") : setbtname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
