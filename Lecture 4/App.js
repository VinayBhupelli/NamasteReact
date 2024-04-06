import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import resimage from "./res-logo.png";
import resData from "./restaurant.json";
/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -Restaurant Container
 *    -Restro Card
 *      -Img
 *      -Name of Res
 *      -Star Rating
 *      -Cusinie
 * Footer
 *  -Copywrights
 *  -Contact Info
 */

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

// Props
const RestaurantCard = (props) => {
  const { resData } = props;
  // optional chaning
  const { name, cuisines, cloudinaryImageId, sla, avgRatingString } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} min's Delivery Time</h4>
      <h4>{avgRatingString} 🌟 rating</h4>
    </div>
  );
};
// const RestaurantCard = ({resName,cuisine}) => {
//   return (
//     <div className="res-card">
//       <img className="res-logo" src={resimage} alt="" />
//       <h3>{resName}</h3>
//       <h4>{cuisine}</h4>
//       <h4>38 Minutes</h4>
//       <h4>4.4 Stars</h4>
//     </div>
//   );
// };
let len = resData["restaurants"].length;
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData["restaurants"].map((element) => {
          return <RestaurantCard key={element.info.id} resData={element} />;
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
