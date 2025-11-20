import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Clock, Star } from 'lucide-react'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/product/ProductGrid'

const Home = () => {
  const { products, loading } = useProducts()
  const featuredProducts = products.slice(0, 4)

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payment",
      description: "Your payment information is safe with us"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality Products",
      description: "We carefully select every product"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">ShopStyle</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing products at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out our most popular products loved by thousands of customers
            </p>
          </div>

          <ProductGrid products={featuredProducts} loading={loading} />

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home