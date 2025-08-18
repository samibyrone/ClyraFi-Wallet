import React from 'react';
import Navbar from "@/app/Home/Navbar/navbar";
import Footer from '@/app/Home/Footer/footer';
import CTASection from '@/app/Home/CTA/cta-section';
import FAQSection from "@/app/Home/FAQ/faq-section";
import HeroSection from "@/app/Home/Hero/hero-section";
import BenefitsSection from "@/app/Home/Benefit/benefit";
import FeaturesSection from "@/app/Home/Features/features";
import Proposition from "@/app/Home/Proposition/proposition";
import TestimonialsSection from "@/app/Home/Testimonial/testimonial";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <Proposition />
        <FeaturesSection />
        <BenefitsSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
