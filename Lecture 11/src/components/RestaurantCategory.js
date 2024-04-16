import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  console.log(data);
  const handleClick = () => {
    //   Lifting the state up
    setShowIndex();
  };
  return (
    <>
      <div className="w-6/12 mx-auto my-4 p-4 bg-[#f0f0f0] shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </h1>
          <h1>👇</h1>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
