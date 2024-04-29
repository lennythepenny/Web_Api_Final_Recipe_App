import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <div>
        
        <h2 style={{ marginLeft: '4px', marginTop: '4px' ,  marginBottom:'4px' }}>
          {recipe.label}
        </h2>
        <label style={{ marginLeft: '4px' }}>
          {recipe.mealType && recipe.mealType.length > 0 ? recipe.mealType[0] : "Unknown"}
        </label>
      </div>
        <img
          style={{ display: 'block', margin: 'auto' }}
          className="w-full h-48 object-cover object-center rounded-t-lg"
          src={recipe.image}
          alt={recipe.label}
        />
        <div className="text-gray-600 mb-4"
             style={{ marginLeft: '4px' }} >
          <span className="block mb-1">
            <b>Ingredients:</b>
          </span>
          <ul className="list-disc pl-4"> {/* Use a list for Ingredients */}
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginLeft: '4px' }}
        className="flex items-center justify-between">
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 font-semibold hover:underline"
          >
            View Recipe
          </a>
        </div>
    </div>
  );
};

export default RecipeCard;
