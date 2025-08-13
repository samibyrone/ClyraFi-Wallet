import Navbar from "@/component/navbar";
import HeroSection from "@/component/hero-section";
import Proposition from "@/component/proposition";
import FeaturesSection from "@/component/Features/features";
import BenefitsSection from "@/component/Benefit/benefit";
import FAQSection from "@/component/FAQ/faq-section";


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
      </main>
    </div>
  );
}
