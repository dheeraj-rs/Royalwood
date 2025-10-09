'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X, ArrowLeft } from 'lucide-react';
import Cart from './Cart';
import AuthModal from './AuthModal';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const SubHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [cartItems, setCartItems] = useState<Array<{ id: string; quantity: number }>>([]);
  const router = useRouter();
  const pathname = usePathname() || '';

  const isProductsActive = pathname === '/products' ||
    pathname === '/cart' ||
    pathname === '/checkout' ||
    pathname === '/order-success' ||
    pathname === '/orders';

  // Determine if we're on a light-themed page
  const isLightTheme: boolean = pathname === '/works';

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


  return (
    <>
      <header className={`py-2 border-b ${isLightTheme
        ? 'bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm'
        : 'bg-transparent border-white/10'
        }`}>
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className={`flex items-center justify-center rounded-lg px-4 py-2 transition-all ${isLightTheme
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/' ? 'text-yellow-400' : ''}`
              }>Home</Link>
              <Link href="/works" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/works' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/works' ? 'text-yellow-400' : ''}`
              }>Works</Link>
              <Link href="/products" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${isProductsActive ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${isProductsActive ? 'text-yellow-400' : ''}`
              }>Products</Link>
              <Link href="/about" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/about' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/about' ? 'text-yellow-400' : ''}`
              }>About</Link>
              <Link href="/contact" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/contact' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/contact' ? 'text-yellow-400' : ''}`
              }>Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/cart"
                className={`p-2 rounded-lg transition-colors relative ${isLightTheme
                  ? 'text-gray-700 hover:bg-amber-100'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className={`absolute -top-1 -right-1 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold ${isLightTheme
                    ? 'bg-amber-600 text-white'
                    : 'bg-yellow-400 text-black'
                    }`}>
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsAuthOpen(true)}
                className={`p-2 rounded-lg transition-colors ${isLightTheme
                  ? 'text-gray-700 hover:bg-amber-100'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                <User size={20} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${isLightTheme
                  ? 'text-gray-700 hover:bg-amber-100'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 mx-4 rounded-lg p-6 ${isLightTheme
            ? 'bg-white border border-gray-200 shadow-lg'
            : 'glass-morphism-dark'
            }`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/' ? 'text-yellow-400' : ''}`
              }>Home</Link>
              <Link href="/works" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/works' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/works' ? 'text-yellow-400' : ''}`
              }>Works</Link>
              <Link href="/products" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${isProductsActive ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${isProductsActive ? 'text-yellow-400' : ''}`
              }>Products</Link>
              <Link href="/about" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/about' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/about' ? 'text-yellow-400' : ''}`
              }>About</Link>
              <Link href="/contact" className={isLightTheme
                ? `transition-colors text-gray-700 hover:text-amber-700 ${pathname === '/contact' ? 'text-amber-700 font-semibold' : ''}`
                : `transition-colors text-white hover:text-yellow-400 ${pathname === '/contact' ? 'text-yellow-400' : ''}`
              }>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default SubHeader;