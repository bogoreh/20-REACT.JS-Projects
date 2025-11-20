import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold">ShopStyle</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at amazing prices.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for updates and offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer