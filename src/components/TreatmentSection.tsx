import React from 'react';
import { useTranslation } from 'react-i18next';
import vamanIcon from '../assets/vamana.jpg';
import virechanIcon from '../assets/virechana.jpg';
import vastiIcon from '../assets/basti.jpg';
import nasyamIcon from '../assets/Nasyam.jpg';
import RaktaMokshaIcon from '../assets/Rakta Moksha.jpg';

const TreatmentSection = () => {
  const { t } = useTranslation();

  const techniques = [
    { key: "Vaman", title: t("Vaman"), desc: t("Therapeutic emesis"), img: vamanIcon, info: t("Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.") },
    { key: "Virechan", title: t("Virechan"), desc: t("Purgation therapy"), img: virechanIcon, info: t("Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.") },
    { key: "Vasti", title: t("Vasti"), desc: t("Medicated enema"), img: vastiIcon, info: t("Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.") },
    { key: "Nasya", title: t("Nasya"), desc: t("Nasal administration"), img: nasyamIcon, info: t("Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.") },
    { key: "Raktamokshana", title: t("Raktamokshana"), desc: t("Bloodletting"), img: RaktaMokshaIcon, info: t("Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.") },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-yellow-700 mb-8">
              {t("AYURVEDIC PANCHKARMA TREATMENT")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
              {techniques.map((item) => (
                <div
                  key={item.key}
                  className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="mx-auto w-24 h-24 mb-4 object-cover rounded-full" 
                  />
                  <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  
                  {/* Hover-over description */}
                  <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-800 text-sm leading-relaxed">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;