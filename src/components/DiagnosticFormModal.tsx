
import { useState, useEffect } from "react";
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
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
  const [formData, setFormData] = useState({
    area: "",
    tools: "",
    goal: "",
    hasTeam: null as boolean | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for custom event to open the modal
  useEffect(() => {
    const handleOpenModal = () => {
      setIsDialogOpen(true);
    };

    document.addEventListener('openDiagnosticModal', handleOpenModal);
    return () => {
      document.removeEventListener('openDiagnosticModal', handleOpenModal);
    };
  }, []);

  // Sync with parent's isOpen state
  useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsDialogOpen(false);
    onClose();
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTeamSelection = (hasTeam: boolean) => {
    setFormData(prev => ({ ...prev, hasTeam }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      setIsSubmitting(true);
      
      // Preparar datos para el webhook
      const webhookData = {
        area_apoyo: formData.area,
        herramientas_uso: formData.tools || "",
        meta_principal: formData.goal,
        tiene_equipo: formData.hasTeam === true ? "Sí" : "No"
      };
      
      // Enviar datos al webhook
      const response = await fetch('https://paneln8n.cerebrumflow.tech/webhook/84ca488a-a121-4e20-bbff-aa9cfce80f73', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      
      // Mensaje de éxito
      toast({
        title: "¡Gracias!",
        description: "Hemos recibido tu diagnóstico. Pronto nos pondremos en contacto.",
        variant: "default"
      });
      
      // Cerrar modal y reiniciar formulario
      handleClose();
      setFormData({
        area: "",
        tools: "",
        goal: "",
        hasTeam: null
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu diagnóstico. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleClose}>
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
              disabled={isSubmitting}
            >
              <SelectTrigger id="area">
                <SelectValue placeholder="Selecciona un área" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automatizacion">Automatización con IA</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="consultoria">Consultoría Empresarial</SelectItem>
                <SelectItem value="formacion">Formación Tecnológica</SelectItem>
                <SelectItem value="investigacion">Investigación de mercado</SelectItem>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
                disabled={isSubmitting}
              >
                Sí
              </Button>
              <Button 
                type="button"
                variant={formData.hasTeam === false ? "default" : "outline"}
                onClick={() => handleTeamSelection(false)}
                className={formData.hasTeam === false ? "bg-cerebrum-blue" : ""}
                disabled={isSubmitting}
              >
                No
              </Button>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-cerebrum-blue hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar diagnóstico"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
