import React from 'react'

const Modal = ({ recipe, onClose }) => {
  if (!recipe) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          {recipe.image && (
            <img src={recipe.image} alt={recipe.title} className="modal-image" />
          )}
          <div className="modal-header-info">
            <h2>{recipe.title}</h2>
            <div className="recipe-details">
              <span>⏱️ {recipe.readyInMinutes} minutes</span>
              <span>👥 Serves {recipe.servings}</span>
              {recipe.healthScore && <span>❤️ Health score: {recipe.healthScore}</span>}
            </div>
          </div>
        </div>

        <div className="modal-body">
          {recipe.extendedIngredients && (
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <div className="ingredients-grid">
                {recipe.extendedIngredients.map(ingredient => (
                  <div key={ingredient.id} className="ingredient-item">
                    <span className="ingredient-amount">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                    <span className="ingredient-name">{ingredient.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recipe.instructions && (
            <div className="instructions-section">
              <h3>Instructions</h3>
              <div className="instructions">
                {recipe.instructions.split('\n').filter(step => step.trim()).map((step, index) => (
                  <div key={index} className="instruction-step">
                    <span className="step-number">{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recipe.sourceUrl && (
            <div className="source-link">
              <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Original Recipe
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal