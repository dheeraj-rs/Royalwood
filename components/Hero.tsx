'use client';

import { ArrowRight, Play, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/shop1.png"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crafting Dreams into
            <br />
            <span className="gold-text-gradient text-shadow-gold">Reality</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover exquisite handcrafted furniture that transforms your space into a masterpiece of elegance and comfort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href={"/products"} className="gold-gradient text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 luxury-shadow flex items-center space-x-2">
              <span>Explore Collection</span>
              <ArrowRight size={20} />
            </Link>

            <button
              onClick={() => setIsVideoPlaying(true)}
              className="glass-morphism-dark px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Watch Story</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="font-playfair text-2xl md:text-3xl font-bold gold-text-gradient">500+</div>
              <div className="text-sm text-gray-400 mt-1">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl md:text-3xl font-bold gold-text-gradient">50+</div>
              <div className="text-sm text-gray-400 mt-1">Expert Craftsmen</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl md:text-3xl font-bold gold-text-gradient">25</div>
              <div className="text-sm text-gray-400 mt-1">Years Heritage</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center lg:p-4 bg-black/20 backdrop-blur-md"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative w-full h-full lg:h-auto lg:max-w-5xl bg-gradient-to-br from-gray-900 via-black to-gray-900 lg:rounded-2xl border-0 lg:border lg:border-amber-500/30 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Our Story</h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-amber-400"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative w-full flex-1 lg:flex-none lg:aspect-video bg-black touch-manipulation">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nb_fFj_0rq8?si=ad1NwlQNVQm5HTm5&autoplay=1&fs=1&modestbranding=1"
                title="Royalwood Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;