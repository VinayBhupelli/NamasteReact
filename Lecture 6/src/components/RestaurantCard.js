import { CDN_URL } from "../utils/constants";
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
        src={`${CDN_URL}/${resData.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} min's Delivery Time</h4>
      <h4>{avgRatingString} 🌟 rating</h4>
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
