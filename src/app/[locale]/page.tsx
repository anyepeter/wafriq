import Navbar from '@/components/Navbar';
import Hero from '@/components/homesections/Hero';
import Features from '@/components/homesections/Features';
import WhyChoose from '@/components/homesections/WhyChoose';
import Pricing from '@/components/homesections/Pricing';
import Shop from '@/components/homesections/Shop';
import Faq from '@/components/homesections/Faq';
import Affiliate from '@/components/homesections/Affiliate';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <Pricing />
      <Shop />
      <Faq />
      <Affiliate />
      <Footer />
    </main>
  );
}
