
import { 
  Brain, 
  LineChart, 
  BarChart4, 
  MessageSquare, 
  Briefcase, 
  Users, 
  Lightbulb, 
  GraduationCap 
} from "lucide-react";

const ProductSection = () => {
  return (
    <section id="producto" className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para impulsar el crecimiento de tu empresa en la era digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Servicio 1 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <Brain className="text-cerebrum-blue" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Automatización con IA</h3>
                <p className="text-gray-600 mb-4">
                  Optimiza tus procesos empresariales con soluciones de automatización impulsadas por inteligencia artificial.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2">
                    <LineChart size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Análisis predictivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart4 size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Optimización de procesos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Chatbots inteligentes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Automatización de tareas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <LineChart className="text-cerebrum-blue" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Marketing Digital</h3>
                <p className="text-gray-600 mb-4">
                  Estrategias personalizadas para aumentar tu presencia online, atraer leads cualificados y convertirlos en clientes.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">SEO avanzado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Contenido optimizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart4 size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Analítica digital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Redes sociales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <Briefcase className="text-cerebrum-blue" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consultoría Empresarial</h3>
                <p className="text-gray-600 mb-4">
                  Asesoramiento estratégico para optimizar procesos, reducir costes y maximizar el potencial de tu negocio.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Planes estratégicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Gestión del cambio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LineChart size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Optimización de costes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Transformación digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <GraduationCap className="text-cerebrum-blue" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Formación Tecnológica</h3>
                <p className="text-gray-600 mb-4">
                  Programas de capacitación personalizados para equipar a tu equipo con las habilidades digitales necesarias.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2">
                    <Brain size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">IA y Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Desarrollo web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Análisis de datos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Marketing digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
