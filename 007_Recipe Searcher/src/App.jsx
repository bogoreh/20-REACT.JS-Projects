import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
import Modal from './components/Modal'
import useRecipes from './hooks/useRecipes'

function App() {
  const [ingredients, setIngredients] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const { recipes, loading, error, searchRecipes } = useRecipes()

  const handleSearch = (ingredientsList) => {
    setIngredients(ingredientsList)
    searchRecipes(ingredientsList)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🍳 Recipe Finder</h1>
          <p className="app-subtitle">Discover delicious recipes with what you have</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
          
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Finding delicious recipes...</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              <p>😕 {error}</p>
            </div>
          )}

          {recipes.length > 0 && (
            <section className="recipes-section">
              <h2 className="section-title">
                Found {recipes.length} recipes with {ingredients.join(', ')}
              </h2>
              <div className="recipes-grid">
                {recipes.map(recipe => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
              </div>
            </section>
          )}

          {!loading && recipes.length === 0 && ingredients.length > 0 && (
            <div className="no-results">
              <p>No recipes found with those ingredients. Try different combinations!</p>
            </div>
          )}
        </div>
      </main>

      {selectedRecipe && (
        <Modal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  )
}

export default App