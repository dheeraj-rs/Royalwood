'use client';

import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useApp } from '@/app/providers';
import type { Product } from '@/app/providers';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({ product, viewMode = 'grid', className = '', style }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { dispatch } = useApp();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (viewMode === 'list') {
    return (
      <div className={`glass-morphism rounded-2xl overflow-hidden hover-lift ${className}`} style={style}>
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-60 md:h-auto">
            <img
              src={product.image}
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}
            
            {product.originalPrice && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                SALE
              </div>
            )}
            
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}
          </div>
          
          <div className="p-6 flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-400">{product.category}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">(4.9)</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold gold-text-gradient">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-3 glass-morphism-dark rounded-lg hover:scale-105 transition-transform">
                  <Eye size={18} />
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="gold-gradient text-black px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-50 disabled:hover:scale-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-morphism rounded-2xl overflow-hidden hover-lift group ${className}`} style={style}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
            SALE
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-colors"
          >
            <Heart size={18} className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'} />
          </button>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
            <Eye size={18} />
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="p-3 gold-gradient text-black rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">{product.category}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold gold-text-gradient">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through ml-2 text-sm">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="gold-gradient text-black px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 text-sm font-semibold disabled:opacity-50 disabled:hover:scale-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;