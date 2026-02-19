import PropTypes from "prop-types";
import { GiGreenhouse, GiRoastChicken } from "react-icons/gi";

function Card({ name, image, id, price, type, onAddToDish }) {
  return (
    <div className="w-[200px] h-[300px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-orange-400 transition-all">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-orange-500">{price}/-</div>
        <div className="flex justify-center items-center gap-2 text-green-400">
          {type === "veg" ? <GiGreenhouse aria-label="Vegetarian" /> : <GiRoastChicken aria-label="Non-Vegetarian" />}
          <span className="text-orange-400 font-bold capitalize">{type}</span>
        </div>
      </div>
      <button 
        className="w-full p-3 bg-orange-300 rounded-lg text-gray-900 hover:bg-amber-600 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => onAddToDish(id)}
        aria-label={`Add ${name} to dish`}
      >
        Add to Dish
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(["veg", "non-veg"]).isRequired,
  onAddToDish: PropTypes.func.isRequired,
};

export default Card;
