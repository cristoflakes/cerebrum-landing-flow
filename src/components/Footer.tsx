
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cerebrum-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              Cerebrum<span className="text-cerebrum-blue">Flow</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Transformando empresas con soluciones basadas en inteligencia artificial y estrategias digitales.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#producto" className="text-gray-400 hover:text-white transition-colors">Automatización IA</a></li>
              <li><a href="#producto" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#producto" className="text-gray-400 hover:text-white transition-colors">Consultoría</a></li>
              <li><a href="#producto" className="text-gray-400 hover:text-white transition-colors">Formación</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#planes" className="text-gray-400 hover:text-white transition-colors">Planes</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Cerebrum Flow. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cerebrum-blue hover:text-blue-400 transition-colors"
          >
            Volver arriba <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
