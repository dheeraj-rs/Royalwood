import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Categories } from '@/components/categories';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Categories />
      <Testimonials />
      <Footer />
    </main>
  );
}
