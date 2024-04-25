import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import './App.css';

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
        <form onSubmit={handleSearchSubmit} className="form-container">
          <input
            type="text"
            name="search"
            value={searchRecipe}
            onChange={handleSearchChange}
            placeholder="Search for recipes..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search Recipe
          </button>
        </form>

        {/* Display recipes in grid */}
        <div className="recipe-grid">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : foodRecipes.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {foodRecipes.map((recipe) => (
                <div key={recipe.recipe.label}>
                  <RecipeCard recipe={recipe.recipe} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
