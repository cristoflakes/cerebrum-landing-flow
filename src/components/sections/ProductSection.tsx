
import { 
  Brain, LineChart, BarChart4, MessageSquare, Briefcase, 
  Users, Lightbulb, GraduationCap, Search, ArrowRight,
  ShoppingCart, Database, Image 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col justify-center">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-full">
                <Brain className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Automatización con IA</h3>
                <p className="text-gray-600">
                  Optimiza tus procesos empresariales con soluciones de automatización impulsadas por inteligencia artificial.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col justify-center">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-full">
                <LineChart className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Marketing Digital</h3>
                <p className="text-gray-600">
                  Estrategias personalizadas para aumentar tu presencia online, atraer leads cualificados y convertirlos en clientes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col justify-center">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-full">
                <Briefcase className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Consultoría Empresarial</h3>
                <p className="text-gray-600">
                  Asesoramiento estratégico para optimizar procesos, reducir costes y maximizar el potencial de tu negocio.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col justify-center">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-full">
                <GraduationCap className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Formación Tecnológica</h3>
                <p className="text-gray-600">
                  Programas de capacitación personalizados para equipar a tu equipo con las habilidades digitales necesarias.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col justify-center">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-cerebrum-blue bg-opacity-10 p-3 rounded-full">
                <Search className="text-cerebrum-blue" size={28} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Investigación de mercado</h3>
                <p className="text-gray-600">
                  Recopilamos y analizamos datos para ayudarte a entender mejor a tu audiencia, identificar oportunidades y tomar decisiones estratégicas basadas en evidencia real.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
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

        {/* Botón de solicitar propuesta */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-cerebrum-blue hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-md transition-all duration-300 text-base"
            onClick={() => {
              const element = document.getElementById('diagnostic-form-modal-trigger');
              if (element) element.click();
            }}
          >
            Solicitar propuesta personalizada
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Historias de Transformación */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Historias de <span className="text-gradient">Transformación</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Historia 1 */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 rounded-xl">
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cerebrum-blue bg-opacity-10 p-2 rounded-full">
                    <ShoppingCart className="text-cerebrum-blue" size={20} />
                  </div>
                  <h4 className="font-bold">E-commerce + WhatsApp Bot</h4>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 w-fit">Aumento de conversión del 40%</Badge>
                <p className="text-gray-600 flex-grow">Implementación de bot inteligente para atención 24/7</p>
              </div>
            </Card>

            {/* Historia 2 */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 rounded-xl">
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cerebrum-blue bg-opacity-10 p-2 rounded-full">
                    <Database className="text-cerebrum-blue" size={20} />
                  </div>
                  <h4 className="font-bold">Startup + Dashboards</h4>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 w-fit">Ahorro de 10 hrs semanales</Badge>
                <p className="text-gray-600 flex-grow">Automatización de reportes y análisis de datos</p>
              </div>
            </Card>

            {/* Historia 3 */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 rounded-xl">
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cerebrum-blue bg-opacity-10 p-2 rounded-full">
                    <Image className="text-cerebrum-blue" size={20} />
                  </div>
                  <h4 className="font-bold">Marca personal + Contenido</h4>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 w-fit">+120% en visibilidad</Badge>
                <p className="text-gray-600 flex-grow">Estrategia integral de marketing digital</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
