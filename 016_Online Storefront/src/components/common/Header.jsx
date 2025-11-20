import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import CartSidebar from '../cart/CartSidebar'

const Header = () => {
  const { getCartItemsCount, toggleCart } = useCart()

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">ShopStyle</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Products
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Search className="h-6 w-6 lg:hidden" />
              </button>
              
              <button 
                onClick={toggleCart}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>

              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <CartSidebar />
    </>
  )
}

export default Header