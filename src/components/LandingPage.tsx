// src/components/LandingPage.tsx
import { useTranslation } from 'react-i18next';
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TreatmentSection from "./TreatmentSection";
import Footer from "./Footer";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TreatmentSection />
      <Footer />
    </div>
  );
};
