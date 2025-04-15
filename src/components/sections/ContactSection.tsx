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
    const {
      name,
      value
    } = e.target;
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
  return;
};
export default ContactSection;