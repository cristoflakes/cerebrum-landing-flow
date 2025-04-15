
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones <span className="text-gradient">personalizadas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas nuestras soluciones son personalizadas según tu negocio
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-cerebrum-blue/10 rounded-full flex items-center justify-center">
              <MessageSquare className="text-cerebrum-blue w-8 h-8 md:w-12 md:h-12" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Contáctanos para una propuesta hecha a medida</h3>
              <p className="text-gray-600 mb-6">
                Cada empresa tiene necesidades únicas. Por eso en Cerebrum Flow no ofrecemos soluciones genéricas. 
                Analizamos tu negocio, comprendemos tus objetivos y desarrollamos una propuesta completamente personalizada 
                que maximice tus resultados.
              </p>
              
              <Button 
                onClick={() => scrollTo('contacto')}
                className="bg-cerebrum-blue hover:bg-blue-700 inline-flex items-center gap-2"
              >
                Solicitar propuesta <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
