import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TreatmentSection from './components/TreatmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TreatmentSection />
      <Footer />
    </div>
  );
}

export default App;