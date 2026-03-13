import { motion } from "framer-motion";
import networkImage from "@/assets/hero-slide-3.jpg"; // Re-using an image or we can use from public

const NetworkSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/images/3.webp"
                alt="Ampla Rede de Saúde WOW+"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="absolute -bottom-8 -right-8 bg-card border border-border p-6 rounded-2xl shadow-card max-w-[280px]"
            >
              <div className="text-orange font-bold text-3xl mb-1">+ Nacional</div>
              <p className="font-sans text-sm text-muted-foreground">Presente em diversas regiões do Brasil para você e sua família.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Rede Médica
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight mb-6">
              Uma rede de saúde <span className="text-gradient">cada vez maior.</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8 leading-relaxed">
              A WOW+ conecta você a médicos, especialistas, clínicas e laboratórios em diversas regiões do Brasil.
              Assim você pode escolher entre:
            </p>
            
            <ul className="space-y-4 mb-8 font-sans text-foreground/80 font-medium text-lg">
              <li className="flex items-center gap-3"><span className="text-orange">✔</span> Atendimento online imediato</li>
              <li className="flex items-center gap-3"><span className="text-orange">✔</span> Consultas presenciais com desconto</li>
              <li className="flex items-center gap-3"><span className="text-orange">✔</span> Exames em clínicas parceiras</li>
              <li className="flex items-center gap-3"><span className="text-orange">✔</span> Compra de medicamentos com economia</li>
            </ul>

            <div className="bg-muted p-6 rounded-xl border-l-4 border-orange">
              <p className="font-sans text-lg font-semibold text-foreground/90">
                Mais acesso. Mais conveniência. Mais cuidado para sua família.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
