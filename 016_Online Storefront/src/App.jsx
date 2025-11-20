import React, { useState } from 'react'
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">🛍️ ShopStyle</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Cart ({count})
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Store
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. This is a test to verify React is working.
          </p>
          
          <div className="space-y-6">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              Click me! Count: {count}
            </button>
            
            <div className="text-sm text-gray-500">
              If this button works and updates the count, React is working properly!
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image {item}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product {item}</h3>
              <p className="text-gray-600 mb-4">Amazing product description here.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$99.99</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2025 ShopStyle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App