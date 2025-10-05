'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X, Crown } from 'lucide-react';
import { CartItem } from '@/app/providers';
import Cart from './Cart';
import AuthModal from './AuthModal';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const items = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(items);
    };
    loadCart();
    window.addEventListener('storage', loadCart);
    window.addEventListener('cartUpdated', loadCart);
    return () => {
      window.removeEventListener('storage', loadCart);
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-6'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <Crown className="h-8 w-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-playfair font-bold text-2xl gold-text-gradient">Royalwood</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/works" className="hover:text-yellow-400 transition-colors">Works</Link>
              <Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/cart"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsAuthOpen(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <User size={20} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism-dark mx-4 rounded-lg p-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/works" className="hover:text-yellow-400 transition-colors">Works</Link>
              <Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;