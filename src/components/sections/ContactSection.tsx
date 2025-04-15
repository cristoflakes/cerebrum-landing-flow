
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Esta es una simulación del envío del formulario
    // Aquí iría la lógica para enviar los datos a un servidor o servicio de formularios
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactar con nosotros! Te responderemos lo antes posible.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio. ¡Ponte en contacto con nosotros!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto de tu mensaje"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Cómo podemos ayudarte?"
                    rows={4}
                    required
                    className="w-full resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-cerebrum-blue hover:bg-blue-700">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-cerebrum-blue text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>info@cerebrumflow.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p>+34 91 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p>Calle Gran Vía 42, 28013, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
