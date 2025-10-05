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
  const pathname = usePathname();

  const isProductsActive = pathname === '/products' ||
    pathname === '/cart' ||
    pathname === '/checkout' ||
    pathname === '/order-success' ||
    pathname === '/orders';

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
      <header className='bg-transparent py-2'
      >
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className={`bg-white/10 border-white/20 text-white flex items-center justify-center rounded-lg hover:text-white px-4 py-2`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`hover:text-yellow-400 transition-colors ${pathname === '/' ? 'text-yellow-400' : ''}`}>Home</Link>
              <Link href="/works" className={`hover:text-yellow-400 transition-colors ${pathname === '/works' ? 'text-yellow-400' : ''}`}>Works</Link>
              <Link href="/products" className={`hover:text-yellow-400 transition-colors ${isProductsActive ? 'text-yellow-400' : ''}`}>Products</Link>
              <Link href="/about" className={`hover:text-yellow-400 transition-colors ${pathname === '/about' ? 'text-yellow-400' : ''}`}>About</Link>
              <Link href="/contact" className={`hover:text-yellow-400 transition-colors ${pathname === '/contact' ? 'text-yellow-400' : ''}`}>Contact</Link>
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
              <Link href="/" className={`hover:text-yellow-400 transition-colors ${pathname === '/' ? 'text-yellow-400' : ''}`}>Home</Link>
              <Link href="/works" className={`hover:text-yellow-400 transition-colors ${pathname === '/works' ? 'text-yellow-400' : ''}`}>Works</Link>
              <Link href="/products" className={`hover:text-yellow-400 transition-colors ${isProductsActive ? 'text-yellow-400' : ''}`}>Products</Link>
              <Link href="/about" className={`hover:text-yellow-400 transition-colors ${pathname === '/about' ? 'text-yellow-400' : ''}`}>About</Link>
              <Link href="/contact" className={`hover:text-yellow-400 transition-colors ${pathname === '/contact' ? 'text-yellow-400' : ''}`}>Contact</Link>
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