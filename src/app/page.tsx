import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <Experience />
      </div>
      <div className="bg-gray-800">
        <Skills />
      </div>
      <div className="bg-gray-900">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
