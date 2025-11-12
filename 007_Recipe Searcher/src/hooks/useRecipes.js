import { useState } from 'react'
import { searchRecipesByIngredients } from '../utils/api'

const useRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchRecipes = async (ingredients) => {
    setLoading(true)
    setError(null)
    
    try {
      const results = await searchRecipesByIngredients(ingredients)
      setRecipes(results)
    } catch (err) {
      setError(err.message)
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

  return {
    recipes,
    loading,
    error,
    searchRecipes
  }
}

export default useRecipes