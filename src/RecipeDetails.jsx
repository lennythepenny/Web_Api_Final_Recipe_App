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
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const RecipeDetails = () => {
//   const { id } = useParams(); // Extract the id from URL params
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     // Fetch recipe details based on the id
//     const fetchRecipeDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://api.edamam.com/search?r=${encodeURIComponent(id)}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0) {
//             setRecipe(data[0]); // Set the recipe data
//           } else {
//             console.error('Recipe not found');
//           }
//         } else {
//           console.error('Error fetching recipe details');
//         }
//       } catch (error) {
//         console.error('Error fetching recipe details', error);
//       }
//     };

//     fetchRecipeDetails();
//   }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>; // Render loading indicator while fetching data
//   }

//   return (
//     <div className="recipe-details">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">{recipe.label}</h2>
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
//         <ul className="list-disc pl-6">
//           {recipe.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient.text}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Nutritional Information:</h3>
//         <ul className="list-disc pl-6">
//           <li>Calories: {Math.round(recipe.calories)}</li>
//           <li>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} {recipe.totalNutrients.PROCNT.unit}</li>
//           <li>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit}</li>
//           <li>Carbohydrates: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} {recipe.totalNutrients.CHOCDF.unit}</li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Preparation:</h3>
//         <ol className="list-decimal pl-6">
//           {recipe.preparationSteps.map((step, index) => (
//             <li key={index}>{step}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;
