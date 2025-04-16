
import { 
  Brain, LineChart, BarChart4, MessageSquare, Briefcase, 
  Users, Lightbulb, GraduationCap, Search, ArrowRight,
  ShoppingCart, Database, Image 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const ProductSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the neural network visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions for high resolution
    const setCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Create neural network nodes
    const createNodes = (count: number) => {
      const nodes = [];
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 2 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: []
        });
      }

      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.85) {
            nodes[i].connections.push(j);
          }
        }
      }

      return nodes;
    };

    // Start animation
    const startAnimation = () => {
      setCanvasDimensions();
      const nodes = createNodes(20);

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        
        // Draw connections first (behind nodes)
        ctx.strokeStyle = 'rgba(0, 110, 177, 0.2)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          for (const connectionIndex of node.connections) {
            const connectedNode = nodes[connectionIndex];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        }
        
        // Draw nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          
          // Update position
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x <= node.radius || node.x >= (canvas.width / window.devicePixelRatio) - node.radius) {
            node.vx *= -1;
          }
          if (node.y <= node.radius || node.y >= (canvas.height / window.devicePixelRatio) - node.radius) {
            node.vy *= -1;
          }
          
          // Draw the node
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius
          );
          gradient.addColorStop(0, 'rgba(0, 110, 177, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 110, 177, 0.2)');
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };

    startAnimation();

    // Resize event listener
    window.addEventListener('resize', setCanvasDimensions);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

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

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Servicio 1 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col">
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
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col">
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
        </div>

        {/* Second row - 3 cards with animated visualization in the middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Servicio 4 - Investigación de mercado (moved to the left) */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col">
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
          
          {/* Centro: Visualización animada de red neuronal/flujo */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full overflow-hidden relative group">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full absolute inset-0"
              style={{ minHeight: "100%", minWidth: "100%" }}
            ></canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/20 pointer-events-none"></div>
          </div>
          
          {/* Servicio 5 - Formación Tecnológica (moved to the right) */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] hover:border-blue-200 h-full flex flex-col">
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
