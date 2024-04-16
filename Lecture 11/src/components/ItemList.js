import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((element) => (
        <div
          key={element.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="">
            <div className="my-2">
              <span className="text-lg">{element.card.info.name} - </span>
              <span>
                {" "}
                ₹{" "}
                {element.card.info.price / 100 ||
                  element.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-sm">{element.card.info.description}</div>
          </div>
          <div className="flex flex-col ">
            {element.card.info.imageId && (
              <img
                className="h-[140px] w-60 rounded-2xl object-cover"
                src={`${CDN_URL}/${element.card.info.imageId}`}
                alt=""
              />
            )}
            <button className={`bg-zinc-400 p-2 min-w-16 rounded-lg`}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
