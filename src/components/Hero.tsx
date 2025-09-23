import React, { useState, useEffect } from 'react';
import SIH1 from '../assets/SIH1.png'; 
import sih8 from '../assets/sih 8.png';
import sih9 from '../assets/sih 9.png';
import sih6 from '../assets/Sih 6.png';
import { useTranslation } from 'react-i18next';

const images = [SIH1, sih8, sih9, sih6];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image with optimized classes */}
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Text and Navigation Arrows */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Hero Text */}
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            {t('Rediscover Yourself with Holistic Healing')}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-200">
            {t('Experience the ancient wisdom of Ayurveda for a balanced and healthy life.')}
          </p>
        </div>
      </div>

      {/* Navigation Arrows for both mobile and desktop */}
      <div className="absolute inset-0 flex items-center justify-between z-20">
        <button
          className="text-white text-3xl md:text-4xl px-4 py-2 hover:bg-white hover:bg-opacity-20 rounded-full"
          onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
        >
          ❮
        </button>
        <button
          className="text-white text-3xl md:text-4xl px-4 py-2 hover:bg-white hover:bg-opacity-20 rounded-full"
          onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Hero;