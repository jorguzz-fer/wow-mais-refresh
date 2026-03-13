import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    tag: "saúde e serviços",
    title: "Saúde Inteligente\nno Conforto da Sua Casa",
    subtitle: "Cuidamos da sua saúde e da sua família com soluções inteligentes, acessíveis e completas. 24h por dia.",
    cta: "Quero Saber Mais",
    link: "https://app.wowmais.com.br/subscription-page/rebqcftkr4oxb4z49hrtf1yb",
  },
  {
    image: heroSlide2,
    tag: "para toda família",
    title: "Proteção e\nBem-Estar Familiar",
    subtitle: "Assistência e segurança quando você mais precisa. Planos para você e toda sua família.",
    cta: "Conheça os Planos",
    link: "https://app.wowmais.com.br/subscription-page/lu2p0s9qhnd8ud08t1omhc11",
  },
  {
    image: heroSlide3,
    tag: "vantagens exclusivas",
    title: "Descontos e Cashback\nem Milhares de Lojas",
    subtitle: "Clube de vantagens com descontos em mais de 10 mil estabelecimentos em todo o Brasil.",
    cta: "Acessar WOW+Clube",
    link: "https://app.wowmais.com.br/subscription-page/zgnbp66s9yejzr7g387nn7jf",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

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
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-primary font-sans text-sm font-semibold uppercase tracking-widest mb-4">
                {slide.tag}
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight whitespace-pre-line mb-6">
                {slide.title}
              </h1>
              <p className="text-secondary-foreground/80 font-sans text-lg md:text-xl max-w-lg mb-8">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                {slide.cta}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-secondary-foreground/10 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-secondary-foreground/10 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

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
