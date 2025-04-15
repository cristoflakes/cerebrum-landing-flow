
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detectar sección activa
      const sections = ['home', 'soluciones', 'testimonios', 'nosotros', 'faq', 'contacto'];
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  
  // Open diagnostic modal
  const openDiagnosticModal = () => {
    // Simulate click on the diagnostic button in hero section
    const event = new CustomEvent('openDiagnosticModal');
    document.dispatchEvent(event);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" onClick={() => scrollTo('home')} className="flex items-center">
            <img alt="Cerebrum Flow Logo" className="h-10 w-10 mr-2" src="/lovable-uploads/cdd2ed20-1017-4b3b-893a-60c3c0ffc22a.png" />
            <span className="text-2xl font-bold text-cerebrum-black">
              Cerebrum <span className="text-cerebrum-blue">Flow</span>
            </span>
          </a>
        </div>

        {isMobile ? (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-cerebrum-black">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollTo('home')} 
              className={`transition-colors ${activeSection === 'home' ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('soluciones')} 
              className={`transition-colors ${activeSection === 'soluciones' ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Soluciones
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className={`transition-colors ${activeSection === 'testimonios' ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('nosotros')} 
              className={`transition-colors ${activeSection === 'nosotros' ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className={`transition-colors ${activeSection === 'faq' ? 'text-cerebrum-blue font-medium border-b-2 border-cerebrum-blue' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              FAQ
            </button>
            <Button 
              onClick={openDiagnosticModal} 
              className="bg-cerebrum-blue hover:bg-blue-700 transition-colors text-white flex items-center gap-2"
            >
              Solicitar propuesta <ArrowRight size={16} />
            </Button>
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[70px] bg-white shadow-lg p-5 rounded-b-2xl z-50 flex flex-col space-y-4">
            <button 
              onClick={() => scrollTo('home')} 
              className={`py-3 border-b ${activeSection === 'home' ? 'text-cerebrum-blue font-medium' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('soluciones')} 
              className={`py-3 border-b ${activeSection === 'soluciones' ? 'text-cerebrum-blue font-medium' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Soluciones
            </button>
            <button 
              onClick={() => scrollTo('testimonios')} 
              className={`py-3 border-b ${activeSection === 'testimonios' ? 'text-cerebrum-blue font-medium' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollTo('nosotros')} 
              className={`py-3 border-b ${activeSection === 'nosotros' ? 'text-cerebrum-blue font-medium' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className={`py-3 border-b ${activeSection === 'faq' ? 'text-cerebrum-blue font-medium' : 'text-cerebrum-black hover:text-cerebrum-blue'}`}
            >
              FAQ
            </button>
            <Button 
              onClick={openDiagnosticModal} 
              className="bg-cerebrum-blue hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2"
            >
              Solicitar propuesta <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
