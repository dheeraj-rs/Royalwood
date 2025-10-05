"use client";

import { Sofa, Bed, Lamp, Armchair, Chrome as Home, Table } from "lucide-react";

const categories = [
  {
    name: "Living Room",
    icon: Sofa,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "120+ Items",
  },
  {
    name: "Bedroom",
    icon: Bed,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "85+ Items",
  },
  {
    name: "Lighting",
    icon: Lamp,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "65+ Items",
  },
  {
    name: "Seating",
    icon: Armchair,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "95+ Items",
  },
  {
    name: "Dining",
    icon: Table,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "75+ Items",
  },
  {
    name: "Office",
    icon: Home,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: "55+ Items",
  },
];

export function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Shop by <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for every space in your home
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${category.image}')`,
                    filter: "brightness(0.4)",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 text-center space-y-2 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/30 group-hover:border-amber-500/50 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">{category.count}</p>
                  </div>

                  <div className="w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
