'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, Eye, Heart, Grid, List, Search, X, RefreshCcw, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  woodType: string;
  isNew?: boolean;
  isBestseller?: boolean;
  discount: number;
  description: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedWoodTypes, setSelectedWoodTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterTypesOpen, setMobileFiltersOpen] = useState('none');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isWoodTypeOpen, setIsWoodTypeOpen] = useState(true);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const woodTypeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesWoodType = selectedWoodTypes.length === 0 || selectedWoodTypes.includes(product.woodType);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesWoodType && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, selectedWoodTypes, priceRange]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleWoodType = (woodType: string) => {
    setSelectedWoodTypes(prev =>
      prev.includes(woodType)
        ? prev.filter(w => w !== woodType)
        : [...prev, woodType]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedWoodTypes([]);
    setSearchTerm('');
    setPriceRange([0, 4000]);
  };

  const categories = ["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor"];
  const woodTypes = ["Oak", "Walnut", "Maple", "Cherry", "Pine"];



  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SubHeader />

      <section className="py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white mb-4">
              Our <span className="text-amber-500">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our complete collection of premium furniture pieces
            </p>
          </div>
        </div>
      </section>

      <section className="py-2 backdrop-blur-sm lg:sticky lg:top-0 z-40 border-b border-white/10 lg:border-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-2 items-center justify-between">
            <div className="flex items-center justify-end lg:justify-between gap-4 w-full relative h-10">

              <div className={`relative flex-1 w-full transition-all duration-300 group ${mobileFilterTypesOpen === 'search' ? 'block' : 'hidden lg:block'
                }`}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-400 transition-colors duration-300 z-10 pointer-events-none">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  placeholder="Search furniture..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-md border-2 border-amber-500/30 text-white placeholder:text-gray-400 rounded-xl focus:border-amber-500/50 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 focus-visible:!outline-none transition-all duration-300 hover:border-amber-500/50 hover:shadow-md hover:shadow-amber-500/10"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:rotate-90 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className={`flex gap-2 px-4 lg:hidden overflow-x-scroll scrollbar-hide [scrollbar-width:none] ${mobileFilterTypesOpen === 'category' ? 'block' : 'hidden'
                }`}>
                {categories.map((category, index) => (
                  <Button
                    ref={el => { categoryRefs.current[index] = el; }}
                    key={category}
                    variant={selectedCategories.includes(category) ? 'default' : 'ghost'}
                    onClick={() => toggleCategory(category)}
                    className={`whitespace-nowrap flex-shrink-0 ${selectedCategories.includes(category)
                      ? 'bg-amber-500 text-black hover:bg-amber-500'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className={`lg:hidden overflow-x-auto scrollbar-hide [scrollbar-width:none] ${mobileFilterTypesOpen === 'woodType' ? 'block' : 'hidden'
                }`}>
                <div className="flex gap-2 px-4">
                  {woodTypes.map((woodType, index) => (
                    <Button
                      ref={el => { woodTypeRefs.current[index] = el; }}
                      key={woodType}
                      variant={selectedWoodTypes.includes(woodType) ? 'default' : 'ghost'}
                      onClick={() => toggleWoodType(woodType)}
                      className={`whitespace-nowrap flex-shrink-0 ${selectedWoodTypes.includes(woodType)
                        ? 'bg-amber-500 text-black hover:bg-amber-500'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {woodType}
                    </Button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setMobileFiltersOpen('none'); }}
                className={`bg-white/10 border-white/20 text-white flex items-center justify-center rounded-lg hover:text-white lg:hidden px-4 py-2 ${mobileFilterTypesOpen === 'none' ? 'hidden' : 'flex'
                  }`}
              >
                Back
              </button>

              <div className={`flex items-center justify-end gap-2 w-full lg:w-auto transition-all duration-300 ${mobileFilterTypesOpen !== 'none' ? 'hidden' : 'flex'
                }`}>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileFiltersOpen('category')}
                  className="lg:hidden border-white/20 text-white bg-white/10 relative"
                >
                  Category
                  {selectedCategories.length > 0 && (
                    <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-amber-500 text-black text-xs">
                      {selectedCategories.length}
                    </Badge>
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileFiltersOpen('woodType')}
                  className="lg:hidden border-white/20 text-white bg-white/10 relative"
                >
                  Wood Type
                  {selectedWoodTypes.length > 0 && (
                    <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-amber-500 text-black text-xs">
                      {selectedWoodTypes.length}
                    </Badge>
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileFiltersOpen('search')}
                  className="lg:hidden border-white/20 text-white bg-white/10"
                >
                  <Search className={`w-4 h-4 ${searchTerm ? 'text-yellow-400' : ''}`} />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="lg:hidden border-white/20 text-white bg-white/10"
                >
                  <RefreshCcw className="w-4 h-4" />
                </Button>

                <div className="border border-white/20 rounded-lg overflow-hidden hidden lg:flex bg-white/5 backdrop-blur-sm">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-none transition-all duration-300 ease-in-out cursor-pointer ${viewMode === 'grid'
                      ? 'bg-amber-500 text-black hover:bg-amber-600 shadow-lg shadow-amber-500/50 scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10 scale-100'
                      }`}
                  >
                    <Grid className={`w-4 h-4 transition-transform duration-300 ${viewMode === 'grid' ? 'scale-110' : 'scale-100'}`} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-none transition-all duration-300 ease-in-out cursor-pointer ${viewMode === 'list'
                      ? 'bg-amber-500 text-black hover:bg-amber-600 shadow-lg shadow-amber-500/50 scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10 scale-100'
                      }`}
                  >
                    <List className={`w-4 h-4 transition-transform duration-300 ${viewMode === 'list' ? 'scale-110' : 'scale-100'}`} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 hidden lg:block">
            <div className="space-y-4 sticky top-24">
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-xl shadow-amber-500/5 overflow-hidden">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-amber-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                    <h3 className="text-base font-bold text-white">Categories</h3>
                    {selectedCategories.length > 0 && (
                      <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-500 text-black rounded-full">
                        {selectedCategories.length}
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${isCategoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-3 pb-3 space-y-1">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 p-3 rounded-xl cursor-pointer group hover:bg-amber-500/10 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="sr-only peer"
                          />
                          <div className={`w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${selectedCategories.includes(category)
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-500 shadow-lg shadow-amber-500/50'
                            : 'border-gray-600 bg-gray-800/50 group-hover:border-amber-500/50'
                            }`}>
                            {selectedCategories.includes(category) && (
                              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className={`text-sm font-medium transition-all duration-300 relative z-10 ${selectedCategories.includes(category)
                          ? 'text-amber-400'
                          : 'text-gray-400 group-hover:text-gray-200'
                          }`}>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-xl shadow-amber-500/5 overflow-hidden">
                <button
                  onClick={() => setIsWoodTypeOpen(!isWoodTypeOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-amber-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                    <h3 className="text-base font-bold text-white">Wood Type</h3>
                    {selectedWoodTypes.length > 0 && (
                      <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-500 text-black rounded-full">
                        {selectedWoodTypes.length}
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${isWoodTypeOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${isWoodTypeOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-3 pb-3 space-y-1">
                    {woodTypes.map((woodType) => (
                      <label
                        key={woodType}
                        className="flex items-center gap-3 p-3 rounded-xl cursor-pointer group hover:bg-amber-500/10 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedWoodTypes.includes(woodType)}
                            onChange={() => toggleWoodType(woodType)}
                            className="sr-only peer"
                          />
                          <div className={`w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${selectedWoodTypes.includes(woodType)
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-500 shadow-lg shadow-amber-500/50'
                            : 'border-gray-600 bg-gray-800/50 group-hover:border-amber-500/50'
                            }`}>
                            {selectedWoodTypes.includes(woodType) && (
                              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className={`text-sm font-medium transition-all duration-300 relative z-10 ${selectedWoodTypes.includes(woodType)
                          ? 'text-amber-400'
                          : 'text-gray-400 group-hover:text-gray-200'
                          }`}>
                          {woodType}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {(selectedCategories.length > 0 || selectedWoodTypes.length > 0) && (
                <Button
                  onClick={clearAllFilters}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-4 text-gray-400">
              Showing {filteredProducts.length} of {products.length} products
            </div>

            <div className={`grid gap-6 ${viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
              }`}>
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`group glass border-white/20 overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-up ${viewMode === 'list' ? 'flex flex-row' : ''
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className={`object-cover transition-transform duration-300 group-hover:scale-110 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                        }`}
                    />

                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <Badge className="bg-green-500 text-white">New</Badge>
                      )}
                      {product.isBestseller && (
                        <Badge className="bg-red-500 text-white">Bestseller</Badge>
                      )}
                      {product.discount > 0 && (
                        <Badge className="gradient-gold text-black font-semibold">
                          {product.discount}% OFF
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="h-10 w-10 rounded-lg bg-black/50 backdrop-blur-sm border cursor-pointer border-white/10 flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                      >
                        <Heart
                          className={`w-5 h-5 ${favorites.includes(product.id) ? "fill-amber-500 text-amber-500" : "text-white"
                            } transition-colors duration-300`}
                        />
                      </button>
                      <Link
                        href={`/products/${product.id}`}
                      >
                        <Button
                          size="icon"
                          className="h-10 w-10 rounded-lg bg-black/50 backdrop-blur-sm border cursor-pointer border-white/10 flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                        >
                          <Eye className="h-5 w-5 text-white" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="outline" className="text-gray-300 border-gray-600">
                        {product.category}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-600">
                        {product.woodType}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-gray-300 text-sm mb-3">{product.description}</p>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300 ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gradient">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full gradient-gold text-black font-semibold cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => {
                        if (product.id) {
                          const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
                          const existingItem = cartItems.find((item: CartItem) => item.id === product.id);
                          if (existingItem) {
                            existingItem.quantity += 1;
                          } else {
                            cartItems.push({ ...product, quantity: 1 });
                          }
                          localStorage.setItem('cart', JSON.stringify(cartItems));
                          window.dispatchEvent(new Event('cartUpdated'));
                        }
                      }}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No products found</div>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearAllFilters} className="gradient-gold text-black">
                  Clear All Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div >
      <Footer />
    </div >
  );
}