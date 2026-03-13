import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/images/slide1-novo.jpg",
  "/images/7.jpg",
  "/images/4.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-navy-dark/70 z-10" />
          <img
            src={slides[current]}
            alt="Fundo WOW Mais"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container h-full flex items-center">
        <div className="max-w-4xl">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block font-sans text-xs font-medium uppercase tracking-[0.35em] text-orange mb-6 bg-orange/10 px-3 py-1 rounded-full">
                Plataforma de Saúde Inteligente
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extralight text-secondary-foreground leading-[1.05] whitespace-pre-line mb-6">
                Cuidar da sua saúde e da sua família <span className="font-bold">ficou mais simples.</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-base md:text-lg max-w-xl mb-8 font-light leading-relaxed">
                A WOW+ conecta você a médicos, clínicas, exames, medicamentos e benefícios em uma única assinatura acessível.
              </p>
              
              <ul className="mb-10 space-y-3 font-sans text-secondary-foreground/90 font-medium">
                <li className="flex items-center gap-3"><span className="text-orange">✔</span> Médicos online 24h</li>
                <li className="flex items-center gap-3"><span className="text-orange">✔</span> Rede de clínicas e especialistas</li>
                <li className="flex items-center gap-3"><span className="text-orange">✔</span> Exames e consultas com descontos</li>
                <li className="flex items-center gap-3"><span className="text-orange">✔</span> Medicamentos até 90% mais baratos</li>
              </ul>
              
              <a
                href="https://app.wowmais.com.br/"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                Assinar Agora
              </a>
            </motion.div>
        </div>
      </div>

      {/* Nav arrows - Hidden since content is static, but keeping dots for visual */}
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-secondary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
