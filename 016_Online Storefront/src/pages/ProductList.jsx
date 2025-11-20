import React, { useState, useMemo } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/product/ProductGrid'
import { CATEGORIES } from '../utils/constants'

const ProductList = () => {
  const { products, loading } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([0, 1000])

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [products, selectedCategory, sortBy, priceRange])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </h3>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Category</h4>
              <div className="space-y-2">
                {CATEGORIES.map(category => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
                <p className="text-gray-600">
                  {filteredAndSortedProducts.length} products found
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-500'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-white shadow' : 'text-gray-500'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <ProductGrid products={filteredAndSortedProducts} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default ProductList