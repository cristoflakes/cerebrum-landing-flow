
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ponte en <span className="text-gradient">contacto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para impulsar tu negocio? Contáctanos hoy mismo y te responderemos en menos de 24 horas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6 shadow-md">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-cerebrum-blue hover:bg-blue-700">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-cerebrum-blue/10 p-3 rounded-lg">
                <Mail className="text-cerebrum-blue" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-gray-600">info@cerebrumflow.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-cerebrum-blue/10 p-3 rounded-lg">
                <Phone className="text-cerebrum-blue" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Teléfono</h3>
                <p className="text-gray-600">+52 1 221 203 8431</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-cerebrum-blue/10 p-3 rounded-lg">
                <MapPin className="text-cerebrum-blue" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Ubicación</h3>
                <p className="text-gray-600">Puebla, México</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
