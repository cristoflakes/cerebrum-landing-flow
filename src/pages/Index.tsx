
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductSection from "@/components/sections/ProductSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductSection />
        <TestimonialsSection />
        <AboutUsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;
