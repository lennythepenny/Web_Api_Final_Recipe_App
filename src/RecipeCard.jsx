import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center rounded-t-lg"
          src={recipe.image}
          alt={recipe.label}
        />
        <div>
          <label className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded">
            {recipe.mealType && recipe.mealType.length > 0 ? recipe.mealType[0] : "Unknown"}
          </label>
        </div>
      </div>
      <div className="p-4 bg-white"> {/* Add a white background here */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
          {recipe.label}
        </h2>
        <div className="text-gray-600 mb-4">
          <span className="block mb-1">
            <b>Ingredients:</b>
          </span>
          <ul className="list-disc pl-4"> {/* Use a list for Ingredients */}
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 font-semibold hover:underline"
          >
            View Recipe
          </a>
          <div className="flex items-center text-gray-600">
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
              1.2K{' '}{' '}
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faComment} className="mr-1" />
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
