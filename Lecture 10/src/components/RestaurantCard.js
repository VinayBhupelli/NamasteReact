import { CDN_URL } from "../utils/constants";
// Props
const RestaurantCard = (props) => {
  const { resData } = props;
  // optional chaning
  const { name, cuisines, cloudinaryImageId, sla, avgRatingString } =
    resData?.info;
  return (
    <div className=" m-4 p-4 w-[200px] bg-[#f0f0f0] rounded-lg min-h-[400px] max-h-[400px] hover:bg-gray-400">
      <div>
        <img
          className="h-[140px] w-60 rounded-2xl object-cover"
          src={`${CDN_URL}/${resData.info.cloudinaryImageId}`}
          alt=""
        />
      </div>

      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="py-2 italic">{cuisines.slice(0, 3).join(", ")}</h4>
      <h4 className="py-2">{sla.deliveryTime} min's Delivery Time</h4>
      <h4 className="py-2">{avgRatingString} 🌟 rating</h4>
    </div>
  );
};
export default RestaurantCard;
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
