
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Potencia tu empresa con <span className="text-gradient">inteligencia artificial</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">
            Transformamos tu negocio con soluciones de automatización IA, 
            marketing digital, consultoría estratégica y formación tecnológica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={() => scrollTo('contacto')}
              className="btn-primary flex items-center gap-2"
            >
              Contáctanos <ArrowRight size={16} />
            </Button>
            <Button 
              onClick={() => scrollTo('producto')}
              variant="outline"
              className="btn-outline"
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cerebrum-blue to-blue-500 rounded-xl blur-lg opacity-75"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Cerebrum Flow AI Analytics" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
