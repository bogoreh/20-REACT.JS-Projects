import React, { useState } from 'react'
import IngredientInput from './IngredientInput'

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState([])

  const handleAddIngredient = (ingredient) => {
    const trimmedIngredient = ingredient.trim().toLowerCase()
    if (trimmedIngredient && !ingredients.includes(trimmedIngredient)) {
      setIngredients([...ingredients, trimmedIngredient])
    }
  }

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove))
  }

  const handleSearch = () => {
    if (ingredients.length > 0) {
      onSearch(ingredients)
    }
  }

  const handleClear = () => {
    setIngredients([])
  }

  return (
    <div className="search-bar">
      <div className="search-header">
        <h2>What ingredients do you have?</h2>
        <p>Add ingredients one by one to find matching recipes</p>
      </div>

      <IngredientInput onAdd={handleAddIngredient} />

      {ingredients.length > 0 && (
        <div className="ingredients-tags">
          {ingredients.map(ingredient => (
            <span key={ingredient} className="ingredient-tag">
              {ingredient}
              <button 
                onClick={() => handleRemoveIngredient(ingredient)}
                className="remove-btn"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="search-actions">
        <button 
          onClick={handleSearch}
          disabled={ingredients.length === 0}
          className="search-btn"
        >
          🔍 Find Recipes
        </button>
        {ingredients.length > 0 && (
          <button onClick={handleClear} className="clear-btn">
            Clear All
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar