import React from 'react'

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} />
        ) : (
          <div className="recipe-image-placeholder">
            🍳
          </div>
        )}
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        
        <div className="recipe-meta">
          <span className="cooking-time">
            ⏱️ {recipe.readyInMinutes || 'N/A'} min
          </span>
          <span className="servings">
            👥 Serves {recipe.servings || 'N/A'}
          </span>
        </div>

        {recipe.usedIngredients && (
          <div className="ingredients-preview">
            <strong>Used ingredients:</strong>
            <div className="ingredients-list">
              {recipe.usedIngredients.slice(0, 3).map(ingredient => (
                <span key={ingredient.id} className="ingredient-chip">
                  {ingredient.name}
                </span>
              ))}
              {recipe.usedIngredients.length > 3 && (
                <span className="ingredient-chip-more">
                  +{recipe.usedIngredients.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="recipe-footer">
          <button className="view-recipe-btn">
            View Recipe →
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard