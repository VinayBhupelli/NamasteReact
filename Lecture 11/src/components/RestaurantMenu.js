import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  // console.log(resID);
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, city, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  // console.log(itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (element) =>
        element?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p>{city}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
