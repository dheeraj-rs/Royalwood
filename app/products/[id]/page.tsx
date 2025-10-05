"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Share2, Minus, Plus } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";

const product = {
  id: 1,
  name: "Luxury Velvet Sofa",
  price: 2499,
  originalPrice: 3299,
  rating: 4.8,
  reviews: 124,
  category: "Living Room",
  description: "Experience unparalleled comfort with our Luxury Velvet Sofa. Handcrafted with premium materials and featuring a stunning design that combines modern aesthetics with timeless elegance. Perfect for any contemporary living space.",
  images: [
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  specs: {
    dimensions: "220cm x 90cm x 85cm",
    material: "Premium Velvet, Hardwood Frame",
    color: "Emerald Green",
    weight: "85kg",
    seating: "3-Seater",
  },
  features: [
    "Premium velvet upholstery",
    "Solid hardwood frame",
    "High-density foam cushions",
    "Removable cushion covers",
    "Easy assembly",
    "5-year warranty",
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SubHeader />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link href="/shop" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Shop
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-amber-400">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-amber-500/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${product.images[selectedImage]}')`,
                    filter: "brightness(0.9)",
                  }}
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-amber-500 text-black text-sm font-bold rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                >
                  <Heart
                    className={`w-6 h-6 ${isFavorite ? "fill-amber-500 text-amber-500" : "text-white"
                      } transition-colors duration-300`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                      ? "border-amber-500 scale-105"
                      : "border-amber-500/20 hover:border-amber-500/50"
                      }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${image}')`,
                        filter: "brightness(0.8)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm text-amber-400 font-semibold">{product.category}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-gray-600"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-amber-400 font-semibold">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline space-x-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  ${product.price.toLocaleString()}
                </div>
                <div className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">{product.description}</p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Quantity</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-white/5 border border-amber-500/30 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
                    >
                      <Minus className="w-4 h-4 text-amber-400" />
                    </button>
                    <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full bg-white/5 border border-amber-500/30 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-6 text-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 py-6"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Truck, text: "Free Shipping" },
                  { icon: Shield, text: "5 Year Warranty" },
                  { icon: RotateCcw, text: "30 Day Returns" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-amber-500/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-sm text-gray-400">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10 space-y-4">
                <h3 className="text-xl font-bold text-white">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-amber-500/10">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10 space-y-4">
                <h3 className="text-xl font-bold text-white">Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
