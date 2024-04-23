// RecipeDetails.jsx
import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Instructions:</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
