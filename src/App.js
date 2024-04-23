import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import './App.css'

const App = () => {
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        // If searchQuery is empty, set it to a default value to prevent errors
        const query = searchQuery || 'chicken';

        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setFoodRecipes(data.hits || []);
        } else {
          setError('Error fetching recipes');
        }
      } catch (error) {
        setError('Error fetching recipes');
      }

      setLoading(false);
    };

    fetchRecipes();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchRecipe);
    setSearchRecipe('');
  };

  // return (
  //   <div className="bg-yellow-100 min-h-screen font-sans">
  //     <header className="bg-blue-500 py-4 text-white">
  //       <div className="container mx-auto text-center">
  //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
  //           <span className="block">Recipe Finder</span>
  //         </h1>
  //       </div>
  //     </header>
  //     <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
  //       {/* Search bar */}
  //       <form
  //         onSubmit={handleSearchSubmit}
  //         className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
  //       >
  //         <div className="relative justify-center flex-grow w-full sm:w-1/2">
  //           <input
  //             type="text"
  //             name="search"
  //             value={searchRecipe}
  //             onChange={handleSearchChange}
  //             placeholder="Search for recipes..."
  //             className="w-full py-3 px-4 bg-gray-100 border border-blue-300 focus:ring-blue-500 focus:border-blue-500 rounded-full text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:shadow-md"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-900 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-transform focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700"
  //         >
  //           Search Recipe
  //         </button>
  //       </form>
  //     </div>

  //     <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
  //       {/* Displaying recipes */}
  //       {loading ? (
  //         <p>Loading...</p>
  //       ) : error ? (
  //         <p>Error: {error}</p>
  //       ) : foodRecipes.length === 0 ? (
  //         <p>No recipes found</p>
  //       ) : (
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //           {foodRecipes.map((recipe) => (
  //             <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div className="App">
      <header className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block">Recipe Finder</span>
          </h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        {/* Search form */}
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative justify-center flex-grow w-full sm:w-1/2">
            <input
              type="text"
              name="search"
              value={searchRecipe}
              onChange={handleSearchChange}
              placeholder="Search for recipes..."
              className="w-full py-3 px-4 bg-gray-100 border border-blue-300 focus:ring-blue-500 focus:border-blue-500 rounded-full text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:shadow-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-900 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-transform focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700"
          >
            Search Recipe
          </button>
        </form>
        
        {/* Display recipes in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : foodRecipes.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            foodRecipes.map((recipe) => (
              <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
            ))
          )}
        </div>
      </main>
    </div>
  );
  
};

export default App;
