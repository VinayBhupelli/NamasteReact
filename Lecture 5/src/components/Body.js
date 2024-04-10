import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // first one is variable second one is function
  const [listofRestaurants, setListofrestaurants] = useState(mockData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurants.filter(
              (element) => element.info.avgRating > 4.4
            );
            setListofrestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((element) => {
          return <RestaurantCard key={element.info.id} resData={element} />;
        })}
      </div>
    </div>
  );
};
export default Body;
