import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/helpers'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link to={`/products/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold bg-red-500 px-3 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
              {product.name}
            </h3>
            <span className="text-2xl font-bold text-blue-600 ml-2">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">
                ({product.reviews})
              </span>
            </div>
            <span className="text-xs text-gray-500 capitalize">
              {product.category}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard