
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gerley Moscoso",
    position: "Director de Fisioquir, Centro de Capacitación en Quirofísica",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Implementar inteligencia artificial y automatizaciones con Cerebrum Flow transformó por completo la forma en que nos comunicamos con nuestros alumnos. Ahora gestionamos las consultas desde redes sociales y WhatsApp de forma automática, sin perder el toque humano. La asesoría que recibimos fue clara, estratégica y totalmente personalizada.",
    rating: 5
  }
];

const TestimonialsSection = () => {
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

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
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
    </section>
  );
};

export default TestimonialsSection;
