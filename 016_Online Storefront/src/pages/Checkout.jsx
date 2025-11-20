import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'
import { formatPrice } from '../utils/helpers'

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)

  const steps = [
    { number: 1, title: 'Shipping' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Confirmation' }
  ]

  const handleOrderComplete = () => {
    setOrderComplete(true)
    clearCart()
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-600">Add some products to proceed to checkout.</p>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-green-500 text-8xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Order Reference</p>
            <p className="text-xl font-semibold">#ORD-{Date.now().toString().slice(-8)}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    currentStep >= step.number
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Checkout Form */}
        <div>
          {currentStep === 1 && (
            <CheckoutForm onNext={() => setCurrentStep(2)} />
          )}
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={handleOrderComplete}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Complete Order - {formatPrice(getCartTotal() * 1.1)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Checkout