
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { DiagnosticFormModal } from "@/components/DiagnosticFormModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <span className="text-cerebrum-blue text-lg md:text-xl font-medium italic">Innovación digital</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Estrategia inteligente, <span className="text-gradient">automatización eficiente</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">Potencia tu negocio con soluciones personalizadas de automatización y tecnología estratégica.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => setIsModalOpen(true)} className="bg-cerebrum-blue hover:bg-blue-700 text-white flex items-center gap-2">
              Solicitar propuesta personalizada <ArrowRight size={16} />
            </Button>
            <Button onClick={() => scrollTo('soluciones')} variant="outline" className="border-2 border-cerebrum-blue text-cerebrum-blue hover:bg-cerebrum-blue hover:text-white flex items-center gap-2">
              Ver Soluciones <ArrowDown size={16} />
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cerebrum-blue to-blue-500 rounded-xl blur-lg opacity-75"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop" alt="Inteligencia Artificial en acción" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal form */}
      <DiagnosticFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
