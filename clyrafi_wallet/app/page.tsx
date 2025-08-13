import React from 'react';
import Navbar from "@/app/Home/Navbar/navbar";
import HeroSection from "@/app/Home/Hero/hero-section";
import Proposition from "@/app/Home/Proposition/proposition";
import FeaturesSection from "@/app/Home/Features/features";
import BenefitsSection from "@/app/Home/Benefit/benefit";
import FAQSection from "@/app/Home/FAQ/faq-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <HeroSection />
        <Proposition />
        <FeaturesSection />
        <BenefitsSection />
        <FAQSection />
      </div>
    </div>
  );
}
