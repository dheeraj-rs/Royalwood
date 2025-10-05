'use client';

import { Truck, Shield, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary white-glove delivery service for all orders above $2,000'
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Comprehensive warranty covering craftsmanship and materials'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handcrafted by master artisans using finest materials'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service team available around the clock'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 gold-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;