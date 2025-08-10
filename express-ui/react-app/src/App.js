

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-1">
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
