"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import SubHeader from '@/components/SubHeader';
import Image from 'next/image';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining Room' },
    { id: 'office', label: 'Office' },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Living Room",
      category: "living",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A sophisticated living space featuring our premium leather sectional and handcrafted coffee table.",
      client: "The Henderson Residence"
    },
    {
      id: 2,
      title: "Executive Office Suite",
      category: "office",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Custom executive desk and built-in shelving system for a corporate headquarters.",
      client: "Sterling & Associates"
    },
    {
      id: 3,
      title: "Master Bedroom Collection",
      category: "bedroom",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant bedroom set with custom headboard and matching nightstands.",
      client: "The Riverside Estate"
    },
    {
      id: 4,
      title: "Dining Room Transformation",
      category: "dining",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Grand dining table with custom chairs and china cabinet for family gatherings.",
      client: "The Morrison Family"
    },
    {
      id: 5,
      title: "Contemporary Living Space",
      category: "living",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern furniture collection blending comfort with cutting-edge design.",
      client: "Downtown Loft Project"
    },
    {
      id: 6,
      title: "Home Office Sanctuary",
      category: "office",
      image: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Productive workspace with custom storage solutions and ergonomic furniture.",
      client: "Creative Professional"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Royalwood's attention to detail is unmatched. Every piece they create is a work of art that perfectly balances form and function. My clients are always thrilled with the results.",
      rating: 5,
      project: "Modern Luxury Living Room"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Sterling & Associates",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "The executive office suite Royalwood created for our headquarters is stunning. It reflects our company's values of excellence and professionalism. Highly recommended.",
      rating: 5,
      project: "Executive Office Suite"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Our dining room has become the heart of our home thanks to Royalwood's beautiful craftsmanship. The quality is exceptional and the design is timeless.",
      rating: 5,
      project: "Dining Room Transformation"
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SubHeader />

      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              My Previous <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore my completed projects with photos, details, and prices. Filter by category and click any project to see the full story of quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/works/${project.id}`} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-amber-400 text-sm font-medium mb-3">{project.client}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from real customers who trusted us with their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      width={800}
                      height={600}
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400 mr-1" />
                    ))}
                  </div>

                  <Quote className="text-amber-400 mb-4" size={24} />
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <p className="text-amber-400 text-xs font-medium">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioPage;