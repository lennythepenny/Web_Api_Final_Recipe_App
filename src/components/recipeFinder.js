// RecipeFinder.js

import React, { useState } from 'react';

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a dish name.');
      return;
    }

    // Fetch recipe data from your backend API
    // Replace 'your-backend-api-url' with the actual URL of your backend API
    fetch(`${process.env.REACT_APP_API_URL}/recipes?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          alert('No recipe found for the given search term.');
        }
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
        alert('An error occurred while fetching the recipe.');
      });
  };

  const containerStyle = {
    backgroundColor: '#ffffff',
    fontSize: '16px',
    padding: '3em 2.8em',
    width: '90vw',
    maxWidth: '32em',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    borderRadius: '0.6em',
  };

  const searchContainerStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '9fr 3fr',
    gap: '1.2em',
  };

  const inputStyle = {
    fontSize: '1em',
    padding: '0.6em',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #202030',
  };

  const buttonStyle = {
    fontSize: '1em',
    backgroundColor: '#f4c531',
    border: 'none',
    fontWeight: '600',
    borderRadius: '0.3em',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="search-container" style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Type A Dish Name Here.."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSearch} style={buttonStyle}>
          Search
        </button>
      </div>
      {/* Render recipe details here */}
    </div>
  );
};

export default RecipeFinder;
