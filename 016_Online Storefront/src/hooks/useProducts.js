import { useState, useEffect } from 'react'
import { PRODUCTS } from '../utils/constants'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setProducts(PRODUCTS)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
  }

  return {
    products,
    loading,
    error,
    getProductById
  }
}