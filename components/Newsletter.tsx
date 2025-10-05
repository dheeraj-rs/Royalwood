'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock subscription
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism rounded-3xl p-12">
            <div className="w-20 h-20 mx-auto mb-8 gold-gradient rounded-full flex items-center justify-center">
              <Mail size={32} className="text-black" />
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with <span className="gold-text-gradient">Royalwood</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and interior design tips
              from our experts. Join thousands of design enthusiasts.
            </p>

            {subscribed ? (
              <div className="glass-morphism-dark rounded-lg p-6 max-w-md mx-auto">
                <div className="text-yellow-400 font-semibold text-lg mb-2">Thank you!</div>
                <div className="text-gray-400">You&apos;ve been added to our exclusive list.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-4 bg-black/30 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="gold-gradient text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:w-auto"
                  >
                    <span>Subscribe</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}

            <p className="text-gray-500 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;