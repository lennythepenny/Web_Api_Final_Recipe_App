import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{recipe.label}</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Nutritional Information:</h3>
        <ul className="list-disc pl-6">
          <li>Calories: {Math.round(recipe.calories)}</li>
          <li>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} {recipe.totalNutrients.PROCNT.unit}</li>
          <li>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit}</li>
          <li>Carbohydrates: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} {recipe.totalNutrients.CHOCDF.unit}</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Preparation:</h3>
        <ol className="list-decimal pl-6">
          {recipe.preparationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
