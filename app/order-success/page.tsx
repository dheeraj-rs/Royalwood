import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Package, Truck, Calendar, ArrowRight } from 'lucide-react';
import SubHeader from '@/components/SubHeader';

const OrderSuccessPage = () => {
  const orderNumber = `RW${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SubHeader />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="mx-auto mb-6 text-green-500" size={80} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 inline-block">
              <div className="text-sm text-gray-400 mb-1">Order Number</div>
              <div className="text-2xl font-bold text-amber-400">#{orderNumber}</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">What Happens Next?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Order Processing</h3>
                <p className="text-gray-400 text-sm">
                  We&apos;re preparing your custom furniture pieces with care and attention to detail.
                </p>
                <div className="text-amber-400 text-sm font-medium mt-2">1-2 business days</div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">White Glove Delivery</h3>
                <p className="text-gray-400 text-sm">
                  Professional delivery team will bring your furniture and set it up in your space.
                </p>
                <div className="text-amber-400 text-sm font-medium mt-2">10-14 business days</div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enjoy Your Furniture</h3>
                <p className="text-gray-400 text-sm">
                  Your beautiful new furniture is ready to transform your living space.
                </p>
                <div className="text-amber-400 text-sm font-medium mt-2">Lifetime warranty</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Delivery Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-amber-400" size={20} />
                  <div>
                    <div className="text-sm text-gray-400">Estimated Delivery</div>
                    <div className="text-white font-medium">{estimatedDelivery}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  You&apos;ll receive tracking information and delivery updates via email and SMS.
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">
                  Our customer service team is here to help with any questions about your order.
                </p>
                <div className="space-y-2">
                  <div className="text-white">📞 +1 (555) 123-4567</div>
                  <div className="text-white">✉️ orders@royalwood.com</div>
                  <div className="text-gray-400">Mon-Fri 9AM-6PM EST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orders"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
            >
              Track Your Order
              <ArrowRight size={20} className="ml-2" />
            </Link>

            <Link
              href="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-amber-600/10 to-orange-700/10 rounded-2xl border border-amber-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Thank You for Choosing Royalwood</h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We&apos;re honored to be part of your home&apos;s transformation. Our craftsmen are already
              working on your custom pieces, and we can&apos;t wait for you to experience the quality
              and beauty of Royalwood furniture.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccessPage;