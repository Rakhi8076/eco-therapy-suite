import React from 'react';

const TreatmentSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">
              AYURVEDIC PANCHKARMA TREATMENT IN DELHI
            </h2>
            <p className="text-gray-600 text-center max-w-5xl mx-auto leading-relaxed mb-4">
              Panchakarma is a highly effective Ayurvedic therapy that plays a vital role in maintaining a healthy body. This ancient healing technique offers five 
              significant benefits that promote overall well-being. One of the key benefits of Panchakarma is the process of detoxifying the body and 
              rejuvenating the mind. Through a series of stages, Panchakarma focuses on purifying the body at various levels, thereby eliminating toxins (ama) 
              and enhancing digestive fire (agni)...
            </p>
            <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">Read more</a>
          </div>
          <div className="hidden lg:block ml-8">
            <img 
              src="https://images.pexels.com/photos/5240446/pexels-photo-5240446.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
              alt="Ayurvedic illustration" 
              className="w-64 h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Therapies Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Listed beneath are some of the Ayurvedic therapies included in the programme:
          </h3>
        </div>

        {/* Abhyanga Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Ayurvedic massage 1" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/5240813/pexels-photo-5240813.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Ayurvedic massage 2" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div>
              <h4 className="text-3xl font-bold text-yellow-700 mb-4">ABHYANGA</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A four hand synchronized full-body massage treatment where the body is wrapped with the 
                finest quality medicated oils followed by smooth, gentle movements rubbing the oils deeply 
                into the tissues, this massage is therapeutic as well as highly rejuvenating.
              </p>
              
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-3">Programme Benefits:</h5>
                <h6 className="text-lg font-medium text-gray-700 mb-2">Rejuvenation</h6>
                <ul className="text-gray-600 space-y-1">
                  <li>• Relaxing, energizing and rejuvenating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Section */}
        <div className="mt-16 text-center">
          <div className="bg-cover bg-center py-16 rounded-lg relative" 
               style={{backgroundImage: 'url(https://images.pexels.com/photos/5240649/pexels-photo-5240649.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop)'}}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-4 rounded-full font-semibold text-xl hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;