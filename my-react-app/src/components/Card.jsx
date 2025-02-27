import { useContext } from 'react';
import { BASE_URL } from '../constant';
import { Link } from 'react-router-dom';
import context from '../utils/Usercontext';


const Card = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, id } = props.list.card.card.info;
  const {user}=useContext(context);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img 
        className="h-48 w-full" 
        src={BASE_URL + cloudinaryImageId} 
        alt={name} 
      />

      {/* Content */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          <Link to={`/menu/${id}`} className="hover:text-blue-500 transition-colors duration-300">
            {name}
          </Link>
        </h2>

        {/* Cuisines */}
        <p className="text-gray-600 text-sm truncate">{cuisines.join(", ")}</p>

        {/* Rating */}
        <div className="mt-2 flex items-center">
          <span className="text-gray-800 font-medium ml-1">{avgRating}⭐</span>
        </div>
        <h1>{user.name}-{user.email}</h1>
      </div>
    </div>
  );
};

export default Card;
