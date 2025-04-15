
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: 1,
    name: "Básico",
    description: "Para pequeñas empresas que están comenzando",
    price: "249€",
    period: "mes",
    features: [
      "Automatización de 1 proceso empresarial",
      "Estrategia básica de marketing digital",
      "2 horas de consultoría mensual",
      "Acceso a 1 curso de formación",
      "Soporte por email"
    ],
    cta: "Empezar ahora",
    popular: false
  },
  {
    id: 2,
    name: "Profesional",
    description: "Para empresas en crecimiento",
    price: "499€",
    period: "mes",
    features: [
      "Automatización de 3 procesos empresariales",
      "Estrategia completa de marketing digital",
      "5 horas de consultoría mensual",
      "Acceso a 3 cursos de formación",
      "Soporte prioritario",
      "Auditoría mensual de resultados"
    ],
    cta: "Prueba 14 días gratis",
    popular: true
  },
  {
    id: 3,
    name: "Empresarial",
    description: "Solución completa para grandes empresas",
    price: "Personalizado",
    period: "",
    features: [
      "Automatización ilimitada de procesos",
      "Estrategia premium de marketing digital",
      "Consultoría ilimitada",
      "Acceso a todo el catálogo de formación",
      "Soporte 24/7 con gestor dedicado",
      "Auditoría semanal de resultados",
      "Desarrollo de soluciones a medida"
    ],
    cta: "Contactar",
    popular: false
  }
];

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
            Planes a <span className="text-gradient">tu medida</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`
                rounded-xl p-8 border transition-all duration-300
                ${plan.popular 
                  ? 'border-cerebrum-blue shadow-lg shadow-cerebrum-blue/10 relative' 
                  : 'border-gray-200 hover:border-cerebrum-blue/30 hover:shadow-md'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cerebrum-blue text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">/{plan.period}</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check size={20} className="text-cerebrum-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-cerebrum-blue hover:bg-blue-700' 
                    : 'bg-white text-cerebrum-blue border-2 border-cerebrum-blue hover:bg-cerebrum-blue hover:text-white'
                }`}
                onClick={() => scrollTo('contacto')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Necesitas una solución adaptada específicamente a tu negocio?
          </p>
          <Button 
            variant="outline" 
            className="btn-outline"
            onClick={() => scrollTo('contacto')}
          >
            Habla con nuestro equipo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
