import React, { useState } from 'react';
import { ShoppingCart, Search, Star, Heart, Menu, X, Truck, Leaf, Award } from 'lucide-react';

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fruits = [
    {
      id: 1,
      name: 'Organic Strawberries',
      price: 4.99,
      originalPrice: 6.99,
      image: 'https://placehold.co/300x300/ff6b81/ffffff?text=Strawberries',
      rating: 4.8,
      reviews: 124,
      category: 'Berries',
      organic: true,
      featured: true
    },
    {
      id: 2,
      name: 'Premium Bananas',
      price: 2.49,
      originalPrice: 3.29,
      image: 'https://placehold.co/300x300/ffd93d/000000?text=Bananas',
      rating: 4.6,
      reviews: 89,
      category: 'Tropical',
      organic: false,
      featured: true
    },
    {
      id: 3,
      name: 'Fresh Avocados',
      price: 3.99,
      originalPrice: 5.49,
      image: 'https://placehold.co/300x300/4ade80/000000?text=Avocados',
      rating: 4.9,
      reviews: 203,
      category: 'Exotic',
      organic: true,
      featured: true
    },
    {
      id: 4,
      name: 'Sweet Cherries',
      price: 8.99,
      originalPrice: 12.99,
      image: 'https://placehold.co/300x300/f87171/ffffff?text=Cherries',
      rating: 4.7,
      reviews: 67,
      category: 'Berries',
      organic: true,
      featured: false
    },
    {
      id: 5,
      name: 'Juicy Oranges',
      price: 3.49,
      originalPrice: 4.99,
      image: 'https://placehold.co/300x300/f97316/ffffff?text=Oranges',
      rating: 4.5,
      reviews: 156,
      category: 'Citrus',
      organic: false,
      featured: false
    },
    {
      id: 6,
      name: 'Green Apples',
      price: 2.99,
      originalPrice: 3.99,
      image: 'https://placehold.co/300x300/22c55e/ffffff?text=Apples',
      rating: 4.4,
      reviews: 98,
      category: 'Apples',
      organic: true,
      featured: false
    }
  ];

  const featuredFruits = fruits.filter(fruit => fruit.featured);
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fruit.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const categories = ['All', 'Berries', 'Tropical', 'Citrus', 'Apples', 'Exotic'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">FreshFruit</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-green-800 font-medium hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Shop</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search fruits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-green-800 font-medium">Home</a>
                <a href="#" className="text-gray-600">Shop</a>
                <a href="#" className="text-gray-600">About</a>
                <a href="#" className="text-gray-600">Contact</a>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search fruits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fresh Fruits Delivered Daily</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Premium quality fruits sourced directly from local farms</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Organic Certified</h3>
              <p className="text-gray-600">100% organic and pesticide-free</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Freshness guaranteed or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Fruits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of the freshest and most delicious fruits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFruits.map((fruit) => (
              <div key={fruit.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={fruit.image} 
                    alt={fruit.name}
                    className="w-full h-64 object-cover"
                  />
                  {fruit.organic && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Organic
                    </span>
                  )}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{fruit.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{fruit.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{fruit.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-700">${fruit.price}</span>
                      <span className="text-gray-500 line-through">${fruit.originalPrice}</span>
                    </div>
                    <button 
                      onClick={addToCart}
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Fruits</h2>
            <p className="text-gray-600">Browse our complete collection of fresh fruits</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border-2 border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFruits.map((fruit) => (
              <div key={fruit.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={fruit.image} 
                    alt={fruit.name}
                    className="w-full h-48 object-cover"
                  />
                  {fruit.organic && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Organic
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{fruit.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{fruit.category}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{fruit.rating} ({fruit.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-700">${fruit.price}</span>
                      <span className="text-gray-500 line-through text-sm">${fruit.originalPrice}</span>
                    </div>
                    <button 
                      onClick={addToCart}
                      className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Fresh with Our Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">Get weekly updates on new arrivals and exclusive discounts</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">FreshFruit</span>
              </div>
              <p className="text-gray-400">Premium quality fruits delivered fresh to your doorstep every day.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Berries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tropical</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Citrus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400">Email: info@freshfruit.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Address: 123 Fruit Street, Fresh City</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshFruit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;