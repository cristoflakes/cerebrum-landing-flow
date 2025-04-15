
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DiagnosticFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticFormModal = ({ isOpen, onClose }: DiagnosticFormModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    area: "",
    tools: "",
    goal: "",
    hasTeam: null as boolean | null
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTeamSelection = (hasTeam: boolean) => {
    setFormData(prev => ({ ...prev, hasTeam }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.area || !formData.goal) {
      toast({
        title: "Formulario incompleto",
        description: "Por favor completa los campos requeridos.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulación de envío de datos
    console.log("Formulario enviado:", formData);
    
    // Mensaje de éxito
    toast({
      title: "Diagnóstico enviado",
      description: "Hemos recibido tu información. Nos pondremos en contacto contigo pronto.",
      variant: "default"
    });
    
    // Cerrar modal y reiniciar formulario
    onClose();
    setFormData({
      area: "",
      tools: "",
      goal: "",
      hasTeam: null
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Solicitar propuesta personalizada</DialogTitle>
          <DialogDescription>
            Completa este breve diagnóstico para recibir una propuesta adaptada a tus necesidades.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="area" className="text-sm font-medium">
              ¿En qué área necesitas apoyo? <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.area}
              onValueChange={(value) => handleChange("area", value)}
            >
              <SelectTrigger id="area">
                <SelectValue placeholder="Selecciona un área" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automatizacion">Automatización con IA</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="consultoria">Consultoría Empresarial</SelectItem>
                <SelectItem value="formacion">Formación Tecnológica</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="tools" className="text-sm font-medium">
              ¿Qué herramientas usas actualmente?
            </label>
            <Input
              id="tools"
              value={formData.tools}
              onChange={(e) => handleChange("tools", e.target.value)}
              placeholder="Ej: WhatsApp Business, Excel, Shopify..."
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="goal" className="text-sm font-medium">
              ¿Cuál es tu meta principal? <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="goal"
              value={formData.goal}
              onChange={(e) => handleChange("goal", e.target.value)}
              placeholder="Describe brevemente qué esperas lograr..."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">
              ¿Tienes un equipo actualmente?
            </label>
            <div className="flex space-x-4 pt-2">
              <Button 
                type="button"
                variant={formData.hasTeam === true ? "default" : "outline"} 
                onClick={() => handleTeamSelection(true)}
                className={formData.hasTeam === true ? "bg-cerebrum-blue" : ""}
              >
                Sí
              </Button>
              <Button 
                type="button"
                variant={formData.hasTeam === false ? "default" : "outline"}
                onClick={() => handleTeamSelection(false)}
                className={formData.hasTeam === false ? "bg-cerebrum-blue" : ""}
              >
                No
              </Button>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full bg-cerebrum-blue hover:bg-blue-700">
              Enviar diagnóstico
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
