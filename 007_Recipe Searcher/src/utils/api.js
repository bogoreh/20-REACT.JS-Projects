const SPOONACULAR_API_KEY = '57142f1598c9416892b64c51ad4a5358'

export const searchRecipesByIngredients = async (ingredients) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&number=10&apiKey=${SPOONACULAR_API_KEY}`
  )
  const data = await response.json()
  return data
}