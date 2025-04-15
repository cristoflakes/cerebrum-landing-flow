
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detectar sección activa
      const sections = ['home', 'soluciones', 'testimonios', 'planes', 'contacto'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" onClick={() => scrollTo('home')} className="flex items-center">
            <img 
              src="/lovable-uploads/cerebrum-flow-logo.png" 
              alt="Cerebrum Flow Logo" 
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl font-bold text-cerebrum-black">
              Cerebrum <span className="text-cerebrum-blue">Flow</span>
            </span>
          </a>
        </div>

        {isMobile ? (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-cerebrum-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollTo('home')} 
              className={`transition-colors ${
                activeSection === 'home' 
                  ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('soluciones')} 
              className={`transition-colors ${
                activeSection === 'soluciones' 
                  ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Soluciones
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className={`transition-colors ${
                activeSection === 'testimonios' 
                  ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className={`transition-colors ${
                activeSection === 'planes' 
                  ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Planes
            </button>
            <button 
              onClick={() => scrollTo('contacto')} 
              className={`transition-colors ${
                activeSection === 'contacto' 
                  ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollTo('contacto')}
              className="bg-cerebrum-blue hover:bg-blue-700 transition-colors"
            >
              Empezar Ahora
            </Button>
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[70px] bg-white shadow-lg p-5 rounded-b-2xl z-50 flex flex-col space-y-4">
            <button 
              onClick={() => scrollTo('home')} 
              className={`py-3 border-b ${
                activeSection === 'home' 
                  ? 'text-cerebrum-blue font-medium' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('soluciones')} 
              className={`py-3 border-b ${
                activeSection === 'soluciones' 
                  ? 'text-cerebrum-blue font-medium' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Soluciones
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className={`py-3 border-b ${
                activeSection === 'testimonios' 
                  ? 'text-cerebrum-blue font-medium' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('planes')} 
              className={`py-3 border-b ${
                activeSection === 'planes' 
                  ? 'text-cerebrum-blue font-medium' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Planes
            </button>
            <button 
              onClick={() => scrollTo('contacto')} 
              className={`py-3 border-b ${
                activeSection === 'contacto' 
                  ? 'text-cerebrum-blue font-medium' 
                  : 'text-cerebrum-black hover:text-cerebrum-blue'
              }`}
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollTo('contacto')}
              className="bg-cerebrum-blue hover:bg-blue-700 transition-colors w-full"
            >
              Empezar Ahora
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
