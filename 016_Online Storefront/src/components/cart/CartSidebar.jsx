import React from 'react'
import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'

const CartSidebar = () => {
  const { isCartOpen, toggleCart, items, getCartTotal, getCartItemsCount } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold">
                Your Cart ({getCartItemsCount()})
              </h2>
            </div>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some products to get started!</p>
                <button
                  onClick={toggleCart}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              
              <div className="space-y-2">
                <Link
                  to="/cart"
                  onClick={toggleCart}
                  className="block w-full bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={toggleCart}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar