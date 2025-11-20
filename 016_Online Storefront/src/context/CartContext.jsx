import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
}

const initialState = {
  items: []
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <CartContext.Provider value={{ items: state.items, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}