
import { Brain, LineChart, BarChart4, MessageSquare, Briefcase, Users, Lightbulb, GraduationCap, Search } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="soluciones" className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones a <span className="text-gradient">tu Medida</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Cada negocio es único. En Cerebrum Flow analizamos tus objetivos y diseñamos una estrategia inteligente, a medida. 
            Automatización, marketing, consultoría o formación: tú eliges, nosotros lo hacemos realidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Servicio 1 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <Brain className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Automatización con IA</h3>
                <p className="text-gray-600 mb-6">
                  Optimiza tus procesos empresariales con soluciones de automatización impulsadas por inteligencia artificial.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <LineChart size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Análisis predictivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart4 size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Optimización</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Chatbots inteligentes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Automatización</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <LineChart className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Marketing Digital</h3>
                <p className="text-gray-600 mb-6">
                  Estrategias personalizadas para aumentar tu presencia online, atraer leads cualificados y convertirlos en clientes.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">SEO avanzado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Contenido</span>
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
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <Briefcase className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Consultoría Empresarial</h3>
                <p className="text-gray-600 mb-6">
                  Asesoramiento estratégico para optimizar procesos, reducir costes y maximizar el potencial de tu negocio.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
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
                    <span className="text-sm">Optimización</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Transformación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <GraduationCap className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Formación Tecnológica</h3>
                <p className="text-gray-600 mb-6">
                  Programas de capacitación personalizados para equipar a tu equipo con las habilidades digitales necesarias.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
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

          {/* Servicio 5 - Investigación de mercado */}
          <div className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-lg">
                <Search className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Investigación de mercado</h3>
                <p className="text-gray-600 mb-6">
                  Recopilamos y analizamos datos para ayudarte a entender mejor a tu audiencia, identificar oportunidades y tomar decisiones estratégicas basadas en evidencia real.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Análisis de audiencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart4 size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Estudio competencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Tendencias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LineChart size={18} className="text-cerebrum-blue" />
                    <span className="text-sm">Informes detallados</span>
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
