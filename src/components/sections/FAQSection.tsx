
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "¿Qué hace única a Cerebrum Flow?",
    answer: "Nuestra combinación de automatización con IA, consultoría estratégica y formación digital nos permite ofrecer soluciones completas y personalizadas para cada cliente."
  },
  {
    id: "faq-2",
    question: "¿Cómo empiezo con sus servicios?",
    answer: "Solo tienes que llenar el formulario de diagnóstico o agendar una reunión. Te guiaremos desde el primer paso."
  },
  {
    id: "faq-3",
    question: "¿Pueden ayudar a negocios pequeños?",
    answer: "Por supuesto. Trabajamos con emprendedores, mipymes y empresas más grandes. Adaptamos cada propuesta a su etapa de crecimiento."
  },
  {
    id: "faq-4",
    question: "¿Qué herramientas usan para automatizar?",
    answer: "Combinamos tecnologías de IA, bots, dashboards inteligentes y APIs personalizadas según el caso."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
