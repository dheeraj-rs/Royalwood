'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Users,
  Globe,
  Leaf,
  ArrowRight,
  Clock
} from 'lucide-react';
import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';
import Link from 'next/link';
import Image from 'next/image';

function AboutPage() {
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false]);
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '50,000+', label: 'Happy Customers', color: 'from-blue-400 to-blue-600' },
    { icon: <Award className="w-8 h-8" />, value: '25+', label: 'Years Experience', color: 'from-yellow-400 to-yellow-600' },
    { icon: <Globe className="w-8 h-8" />, value: '15+', label: 'Cities Served', color: 'from-green-400 to-green-600' },
    { icon: <Leaf className="w-8 h-8" />, value: '100%', label: 'Eco-Friendly', color: 'from-purple-400 to-purple-600' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality and strive for perfection in every piece.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source our wood responsibly and practice eco-friendly manufacturing.'
    },
    {
      icon: Users,
      title: 'Craftsmanship',
      description: 'Our skilled artisans bring decades of experience to every creation.'
    },
    {
      icon: Clock,
      title: 'Timeless Design',
      description: 'We create furniture that transcends trends and lasts for generations.'
    }
  ];

  const team = [
    {
      name: 'Rajan k k',
      role: 'Founder & CEO',
      image: '/owner-photo.jpeg',
      description: 'Visionary leader with 40+ years in furniture design and manufacturing'
    },
    {
      name: 'Anju',
      role: 'Master Craftsman',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Award-winning designer specializing in contemporary and luxury furniture'
    },
    {
      name: 'Sanoop',
      role: 'Master Craftsman',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Third-generation craftsman with expertise in traditional woodworking'
    },
    {
      name: 'Biju',
      role: 'Master Craftsman',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Dedicated to ensuring every customer has an exceptional experience'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStats(prev => {
        const nextIndex = prev.findIndex(val => !val);
        if (nextIndex === -1) return prev;
        const newStats = [...prev];
        newStats[nextIndex] = true;
        return newStats;
      });
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(timer);
    }, 800);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 ">
      <SubHeader />

      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">About Royalwood</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Crafting Dreams
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Since 1999
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              For over two decades, Royalwood has been synonymous with luxury, quality, and timeless design.
              We create furniture that transforms houses into homes and spaces into experiences.
            </p>

            <p className="text-base text-gray-400 max-w-4xl mx-auto leading-relaxed">
              What began as a small workshop has evolved into one of the most trusted names in luxury furniture.
              Our commitment to excellence, sustainable practices, and timeless design has made us the preferred
              choice for discerning customers across India. Every piece we create tells a story of dedication,
              artistry, and an unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden pt-8 pb-12 md:py-20">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 ">
              <h2 className="text-4xl font-bold text-white leading-tight text-center lg:text-left">
                Meet the <span className="text-amber-400">Master Craftsman</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  With over <span className="text-amber-400 font-bold">40 years of dedicated experience</span> in woodworking,
                  I founded Royalwood with a simple vision: to create furniture that combines traditional craftsmanship
                  with contemporary design.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  What started as a passion for woodworking has evolved into a legacy of excellence. Each piece we create
                  carries decades of expertise, attention to detail, and a commitment to quality that has made Royalwood
                  a trusted name in luxury furniture.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  From selecting the finest wood to the final polish, every step is guided by years of mastery and an
                  unwavering dedication to perfection. Our workshop is where tradition meets innovation, creating timeless
                  pieces that will be cherished for generations.
                </p>

                <div className="pt-6 sm:pt-8 flex justify-center lg:justify-start">
                  <Link
                    href='/works'
                    className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 hover:scale-105 text-base sm:text-lg group"
                  >
                    Explore Our Works
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                <div className="relative max-w-lg w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/owner-photo.jpeg"
                      alt="Rajan K K - Royalwood Owner & Master Craftsman"
                      className="w-full h-auto object-cover aspect-[3/4] mix-blend-lighten"
                      style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0) 100%)',
                      }}
                      width={800}
                      height={1000}
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/98 via-black/85 to-transparent px-6 sm:px-8 py-8 sm:py-10 pb-10 sm:pb-14">
                      <div className="text-center space-y-3">
                        <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-2xl tracking-wide">
                          Rajan K K
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white font-semibold drop-shadow-lg">
                          Owner & CEO, Royalwood
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 font-medium drop-shadow-md">
                          Master Craftsman & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`group text-center p-8 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl transition-all duration-500 hover:scale-105 transform ${visibleStats[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting the finest materials
              to delivering exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-white/70 text-lg">
              The passionate people behind Royalwood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="transition-transform duration-700 group-hover:scale-110 w-full h-auto object-cover aspect-[3/4] mix-blend-lighten"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400/80 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to completion, every piece undergoes our meticulous crafting process
              that ensures uncompromising quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Design',
                description: 'Conceptualizing unique designs that blend form and function'
              },
              {
                step: '02',
                title: 'Material Selection',
                description: 'Sourcing the finest woods and materials from trusted suppliers'
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'Expert artisans handcraft each piece with precision and care'
              },
              {
                step: '04',
                title: 'Finishing',
                description: 'Applying premium finishes and conducting quality inspections'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have made Royalwood their choice for luxury furniture.
                Let us help you create the home of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href='/works'
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full"
                >
                  My Works
                </Link>
                <Link
                  href='/contact'
                  className="border-white/30 outline-1 outline-amber-500 text-white hover:bg-white/10 hover:border-yellow-400 px-8 py-3 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;