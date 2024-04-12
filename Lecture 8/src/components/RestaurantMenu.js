import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();
  console.log(resID);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25470&lng=77.39370&restaurantId=" +
        resID +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER",
      {
        headers: {
          "x-cors-api-key": "temp_e1252d30b940fc67e8e25b19da5e6078",
        },
      }
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, city, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu:</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
