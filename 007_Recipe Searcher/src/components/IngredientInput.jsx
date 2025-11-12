import React, { useState } from 'react'

const IngredientInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAdd(inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="ingredient-input">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter an ingredient (e.g., chicken, tomato, pasta...)"
          className="ingredient-field"
        />
        <button type="submit" className="add-btn">
          Add Ingredient
        </button>
      </div>
    </form>
  )
}

export default IngredientInput