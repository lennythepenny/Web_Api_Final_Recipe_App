// // RecipeCard.jsx
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

// const RecipeCard = ({ recipe }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105">
//       <div className="relative">
//         <img
//           className="w-full h-48 object-cover object-center rounded-t-lg"
//           src={recipe.image}
//           alt={recipe.label}
//         />
//         <div className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded">
//           {recipe.dishType[0]}
//         </div>
//       </div>
//       <div className="p-4">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
//           {recipe.label}
//         </h1>
//         <div className="text-gray-600 mb-4">
//           <span className="block mb-1">
//             <b>Ingredients:</b>
//           </span>
//           {recipe.ingredientLines.map((ingredient, index) => (
//             <span key={index} className="block pl-4">
//               {ingredient}
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center justify-between">
//           <a
//             href={"/"}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-500 font-semibold hover:underline"
//           >
//             View Recipe
//           </a>
//           <div className="flex items-center text-gray-600">
//             <span className="flex items-center mr-4">
//               <FontAwesomeIcon icon={faThumbsUp} className="mr-1" /> {/* Replace the SVG with Font Awesome icon */}
//               1.2K
//             </span>
//             <span className="flex items-center">
//               <FontAwesomeIcon icon={faComment} className="mr-1" /> {/* Replace the SVG with Font Awesome icon */}
//               6
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
// RecipeCard.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeCard = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);
  const history = useHistory();

  const handleViewRecipe = () => {
    setShowDetails(true);
    // Navigate to RecipeDetails component with recipe details
    history.push('/recipe-details', { recipe });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center rounded-t-lg"
          src={recipe.image}
          alt={recipe.label}
        />
        <div className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded">
          {recipe.dishType[0]}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
          {recipe.label}
        </h1>
        <div className="text-gray-600 mb-4">
          <span className="block mb-1">
            <b>Ingredients:</b>
          </span>
          {recipe.ingredientLines.map((ingredient, index) => (
            <span key={index} className="block pl-4">
              {ingredient}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleViewRecipe}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full transform hover:scale-105 transition-transform focus:outline-none"
          >
            View Recipe
          </button>
          <div className="flex items-center text-gray-600">
            <span className="flex items-center mr-4">
              1.2K
            </span>
            <span className="flex items-center">
              6
            </span>
          </div>
        </div>
      </div>
      {showDetails && <RecipeDetails recipe={recipe} />}
    </div>
  );
};

export default RecipeCard;

