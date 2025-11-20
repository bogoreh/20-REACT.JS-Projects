import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import { formatPrice } from '../utils/helpers'

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-gray-400 text-8xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 flex items-center space-x-2 transition-colors"
        >
          <Trash2 className="h-5 w-5" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Order Summary</span>
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>{formatPrice(getCartTotal() * 0.1)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(getCartTotal() * 1.1)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold block"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="w-full border border-gray-300 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium block mt-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart