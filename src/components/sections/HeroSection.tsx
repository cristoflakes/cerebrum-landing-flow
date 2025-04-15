
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Zap, TrendingUp, HelpingHand } from "lucide-react";
import { DiagnosticFormModal } from "@/components/DiagnosticFormModal";

const benefits = [
  {
    id: 1,
    icon: Zap,
    title: "Innovación digital constante",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Resultados enfocados en crecimiento",
  },
  {
    id: 3,
    icon: HelpingHand,
    title: "Acompañamiento experto paso a paso",
  },
];

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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <span className="text-cerebrum-blue/80 text-sm md:text-base italic">Innovación digital</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Estrategia inteligente, <span className="text-gradient">automatización eficiente</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">Potencia tu negocio con soluciones personalizadas de automatización y tecnología estratégica.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => setIsModalOpen(true)} className="bg-cerebrum-blue hover:bg-blue-700 text-white flex items-center gap-2">
              Solicitar propuesta personalizada <ArrowRight size={16} className="text-4xl font-bold" />
            </Button>
            <Button onClick={() => scrollTo('soluciones')} variant="outline" className="border-2 border-cerebrum-blue text-cerebrum-blue hover:bg-cerebrum-blue hover:text-white flex items-center gap-2">
              Ver Soluciones <ArrowDown size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="flex flex-col items-center text-center p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mb-3 bg-cerebrum-blue/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-cerebrum-blue" />
                </div>
                <h3 className="text-md font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cerebrum-blue to-blue-500 rounded-xl blur-lg opacity-75"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-xl">
              <img 
                src="/lovable-uploads/53e3f77c-4c3a-4606-91a4-25d44273fcd4.png" 
                alt="Cerebrum Flow Logo" 
                className="w-full h-auto rounded-lg max-w-[300px] mx-auto"
              />
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
