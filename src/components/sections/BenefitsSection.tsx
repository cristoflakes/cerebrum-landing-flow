
import { Zap, TrendingUp, HelpingHand } from "lucide-react";

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

const BenefitsSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-16 h-16 mb-4 bg-cerebrum-blue/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-cerebrum-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
