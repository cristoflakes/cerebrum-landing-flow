
const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="section-padding">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quiénes <span className="text-gradient">somos</span>?
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            En Cerebrum Flow somos un equipo apasionado por la tecnología, la estrategia digital y la automatización inteligente. 
            Combinamos experiencia en IA, marketing y consultoría para ofrecer soluciones a medida que ayudan a negocios de todos 
            los tamaños a crecer, optimizar procesos y destacar en el mundo digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
