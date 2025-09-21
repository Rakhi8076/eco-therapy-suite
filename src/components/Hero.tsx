import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{backgroundImage: 'url(https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-yellow-400 transition-colors">
        ❮
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-yellow-400 transition-colors">
        ❯
      </button>
    </section>
  );
};

export default Hero;