import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import NetworkSection from "@/components/NetworkSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection from "@/components/MarqueeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <NetworkSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <MarqueeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
