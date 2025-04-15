
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cerebrum-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img alt="Cerebrum Flow Logo" className="h-10 w-10 mr-2" src="/lovable-uploads/043b325f-0b70-40ac-8b3b-c9a450dd5aa6.png" />
              <h2 className="text-2xl font-bold">
                Cerebrum <span className="text-cerebrum-blue">Flow</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-4">Transformando negocios con tecnología inteligente y estrategias innovadoras.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Automatización IA</a></li>
              <li><a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Consultoría</a></li>
              <li><a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Formación</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 text-sm mb-2">Síguenos</p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/cerebrumflow.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/cerebrumflow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
