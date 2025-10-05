'use client';

import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Crown } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <Crown className="h-8 w-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-playfair font-bold text-2xl gold-text-gradient">Royalwood</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting exceptional luxury furniture for discerning homeowners since 1998.
              Transform your space with timeless elegance.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="p-3 glass-morphism rounded-lg hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Accessories'].map((category) => (
                <li key={category}>
                  <a
                    href={`/products/${category.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-400 mt-1" />
                <div className="text-gray-400">
                  <a href="https://maps.app.goo.gl/5veUqc1BvhmEidgf8"
                  >Quilandy , Elattery Street</a>
                  <p>Kozhikode , Kerala 673306</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-yellow-400" />
                <a className="text-gray-400" href="tel:+919745671335"
                >+91 9745671335</a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-400" />
                <a className="text-gray-400" href="mailto:rajanroyalwood@gmail.com"
                >rajanroyalwood@gmail.com</a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h5 className="text-white font-medium mb-2">Business Hours</h5>
                <div className="text-white/70 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Sat:</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Royalwood. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;