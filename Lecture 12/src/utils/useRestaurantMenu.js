import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
  // fetch API
  const [resInfo, setResInfo] = useState(null);

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
    // console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
