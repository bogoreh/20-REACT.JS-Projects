import React from 'react'
import { Plus, Minus, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/helpers'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(item.id, newQuantity)
  }

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
        <p className="text-blue-600 font-semibold">{formatPrice(item.price)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export default CartItem