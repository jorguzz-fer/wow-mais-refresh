import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const slides = [
  {
    desktop: "/images/slide1-novo.jpg",
    mobile: "/images/slide/slide-1.webp",
  },
  {
    desktop: "/images/7.jpg",
    mobile: "/images/slide/slide-2.webp",
  },
  {
    desktop: "/images/4.jpg",
    mobile: "/images/slide/slide-3.webp",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Desktop image */}
          <img
            src={slides[current].desktop}
            alt="Fundo WOW Mais"
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          {/* Mobile image */}
          <img
            src={slides[current].mobile}
            alt="Fundo WOW Mais"
            className="md:hidden absolute top-0 left-0 w-full h-full object-cover object-top"
          />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container h-full flex items-end pb-28 lg:items-center lg:pb-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-[10px] md:text-xs font-medium uppercase tracking-[0.35em] text-orange mb-4 md:mb-6 bg-orange/10 px-3 py-1 rounded-full">
              Plataforma de Saúde Inteligente
            </span>
            <h1 className="font-display text-3xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] whitespace-pre-line mb-4 md:mb-6">
              Cuidar da sua saúde e da sua família{" "}
              <span className="font-bold">ficou mais simples.</span>
            </h1>
            <p className="text-white/70 font-sans text-sm md:text-lg max-w-xl mb-6 md:mb-8 font-light leading-relaxed">
              A WOW+ conecta você a médicos, clínicas, exames, medicamentos e
              benefícios em uma única assinatura acessível.
            </p>

            <ul className="mb-8 md:mb-10 space-y-2 md:space-y-3 font-sans text-sm md:text-base text-white/90 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-orange">✔</span> Médicos online 24h
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange">✔</span> Rede de clínicas e
                especialistas
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange">✔</span> Exames e consultas com
                descontos
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange">✔</span> Medicamentos até 90%
                mais baratos
              </li>
            </ul>

            <a
              href="https://app.wowmais.com.br/"
              className="inline-block bg-primary text-primary-foreground px-6 md:px-8 py-3.5 md:py-4 rounded-full font-sans font-semibold text-sm md:text-base hover:bg-orange-dark transition-colors shadow-orange"
            >
              Assinar Agora
            </a>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
