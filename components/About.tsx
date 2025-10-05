'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">

            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Crafting <span className="gold-text-gradient">Excellence</span>
              <br />Since 1998
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Royalwood, we believe that exceptional furniture is more than just wood and fabric—
              it&apos;s a testament to artistry, heritage, and the pursuit of perfection. For over 25 years,
              our master craftsmen have been creating heirloom-quality pieces that transform houses into homes.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Every piece in our collection is meticulously handcrafted using time-honored techniques
              passed down through generations. We source only the finest materials from around the world,
              ensuring that each creation not only looks magnificent but stands the test of time.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="font-playfair text-3xl font-bold gold-text-gradient mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold gold-text-gradient mb-2">500+</div>
                <div className="text-gray-400 text-sm">Unique Designs</div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold gold-text-gradient mb-2">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
            </div>

            <Link href="/about" className="w-max gold-gradient text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Our Story</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative fade-in-up px-4">
            <div className="glass-morphism rounded-2xl p-6 hover-lift">
              <Image
                src="/owner-photo.jpeg"
                alt="Master Craftsman"
                className="w-full h-auto object-cover rounded-lg aspect-[3/4]"
                width={800}
                height={600}
              />

              <div className="absolute -top-6 -right-6 glass-morphism-dark p-6 rounded-xl">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold gold-text-gradient mb-1">25</div>
                  <div className="text-xs text-gray-400">Years of Excellence</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-morphism-dark p-4 rounded-xl">
                <div className="text-center">
                  <div className="font-playfair text-lg font-bold gold-text-gradient mb-1">Master</div>
                  <div className="text-xs text-gray-400">Craftmanship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;