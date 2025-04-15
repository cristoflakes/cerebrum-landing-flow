
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
          <a href="#" className="text-2xl font-bold text-cerebrum-black">
            Cerebrum<span className="text-cerebrum-blue">Flow</span>
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
            <button onClick={() => scrollTo('home')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('producto')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors">
              Producto
            </button>
            <button onClick={() => scrollTo('testimonios')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors">
              Testimonios
            </button>
            <button onClick={() => scrollTo('planes')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors">
              Planes
            </button>
            <button onClick={() => scrollTo('contacto')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors">
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
            <button onClick={() => scrollTo('home')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors py-3 border-b">
              Home
            </button>
            <button onClick={() => scrollTo('producto')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors py-3 border-b">
              Producto
            </button>
            <button onClick={() => scrollTo('testimonios')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors py-3 border-b">
              Testimonios
            </button>
            <button onClick={() => scrollTo('planes')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors py-3 border-b">
              Planes
            </button>
            <button onClick={() => scrollTo('contacto')} className="text-cerebrum-black hover:text-cerebrum-blue transition-colors py-3 border-b">
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
