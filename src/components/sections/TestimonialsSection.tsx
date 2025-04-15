
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "CEO, Innova Tech",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Trabajar con Cerebrum Flow transformó nuestra operación diaria. La automatización con IA nos permitió reducir un 40% el tiempo dedicado a tareas administrativas.",
    rating: 5
  },
  {
    id: 2,
    name: "Laura Sánchez",
    position: "Directora de Marketing, Grupo Evolve",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Las estrategias de marketing digital implementadas por el equipo de Cerebrum Flow aumentaron nuestro tráfico web en un 150% y las conversiones en un 60% en solo 3 meses.",
    rating: 5
  },
  {
    id: 3,
    name: "Miguel Álvarez",
    position: "CTO, Data Solutions",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "La formación en IA y análisis de datos que recibió nuestro equipo fue excepcional. Ahora podemos tomar decisiones basadas en datos con confianza y precisión.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas que han transformado sus operaciones con nuestras soluciones
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-cerebrum-blue"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-cerebrum-blue hover:text-cerebrum-blue/80 transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-cerebrum-blue hover:text-cerebrum-blue/80 transition-colors"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-cerebrum-blue' : 'bg-gray-300'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
