"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Royalwood transformed my entire living space. The quality is exceptional and the designs are timeless. Every piece tells a story.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Architect",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "I've recommended Royalwood to all my clients. Their attention to detail and craftsmanship is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "From browsing to delivery, the experience was seamless. The furniture exceeded my expectations in both style and comfort.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Stories from satisfied customers who made their dream spaces a reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-amber-500/30 absolute top-6 right-6" />

              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover bg-center border-2 border-amber-500/50"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
