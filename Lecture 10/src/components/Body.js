import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // first one is variable second one is function
  const [listofRestaurants, setListofrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25470&lng=77.39370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_e1252d30b940fc67e8e25b19da5e6078",
        },
      }
    );
    const json = await data.json();
    console.log(json);
    setListofrestaurants(
      // optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Looks like you are OFFLINE</h1>
        <h1> Please check your Internet Connection</h1>
      </div>
    );

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-300 px-4 py-0.5 mx-4 rounded-xl"
            onClick={() => {
              const filteredRes = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
          <button
            className="bg-gray-300 px-4 py-0.5 mx-2 rounded-xl"
            onClick={() => {
              const filterList = listofRestaurants.filter(
                (element) => element.info.avgRating >= 4.4
              );
              setFilteredRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((element) => {
          return (
            <Link key={element.info.id} to={"restaurant/" + element.info.id}>
              <RestaurantCard resData={element} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
