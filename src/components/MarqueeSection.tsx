import { motion } from "framer-motion";
import { MapPin, Buildings, Pill, Flask } from "@phosphor-icons/react";

const stats = [
  {
    icon: Pill,
    value: "+19 mil",
    label: "Farmácias credenciadas",
  },
  {
    icon: Flask,
    value: "+1.600",
    label: "Atendem manipulação",
  },
  {
    icon: MapPin,
    value: "+3.000",
    label: "Cidades atendidas",
  },
  {
    icon: Buildings,
    value: "100%",
    label: "Das UF's do Brasil",
  },
];

const partnerLogos = [
  { src: "/partners/logos/PagueMenos.jpg", alt: "Pague Menos" },
  { src: "/partners/logos/araujo.jpg", alt: "Araujo" },
  { src: "/partners/logos/indiana.jpg", alt: "Indiana" },
  { src: "/partners/logos/pacheco.jpg", alt: "Pacheco" },
  { src: "/partners/logos/extrafarma.jpg", alt: "Extrafarma" },
  { src: "/partners/logos/farmalife.jpg", alt: "FarmaLife" },
  { src: "/partners/logos/maxxi.jpg", alt: "Maxxi Econômica" },
  { src: "/partners/logos/nissei.jpg", alt: "Nissei" },
  { src: "/partners/logos/drogasmil.jpg", alt: "Drogasmil" },
  { src: "/partners/logos/tamoio.jpg", alt: "Tamoio" },
  { src: "/partners/logos/uai.jpg", alt: "Uai" },
  { src: "/partners/logos/rosario.jpg", alt: "Rosário" },
  { src: "/partners/logos/supér.jpg", alt: "Drogão Super" },
  { src: "/partners/logos/sao-joao.jpg", alt: "Farmácias São João" },
  { src: "/partners/logos/carrefour.jpg", alt: "Carrefour Drogaria" },
  { src: "/partners/logos/clamed.jpg", alt: "Clamed" },
  { src: "/partners/logos/drogal.jpg", alt: "Drogal" },
  { src: "/partners/logos/total.jpg", alt: "Drogaria Total" },
  { src: "/partners/logos/venancio.jpg", alt: "Venâncio" },
  { src: "/partners/logos/ultrafarma.jpg", alt: "Ultrafarma" },
  { src: "/partners/logos/ultra-pop.jpg", alt: "Ultra Popular" },
];

const MarqueeSection = () => {
  // Split logos into two rows for dual marquee
  const mid = Math.ceil(partnerLogos.length / 2);
  const row1 = partnerLogos.slice(0, mid);
  const row2 = partnerLogos.slice(mid);

  return (
    <section className="relative py-20 lg:py-28 bg-warm-gray overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(320 85% 11%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
            Nossos Parceiros e Rede Credenciada
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Rede Credenciada com os principais{" "}
            <span className="text-gradient">varejistas do Brasil</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
            Mais de{" "}
            <strong className="text-foreground">80 mil farmácias</strong> em
            todo Brasil, com cobertura física e digital para você e sua família.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon size={26} weight="duotone" className="text-primary" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-bold text-navy mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Marquee with individual logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Row 1 - scrolls left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-warm-gray to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-warm-gray to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee items-center">
              {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 mx-4 w-[140px] h-[70px] md:w-[180px] md:h-[80px] bg-white rounded-xl shadow-sm border border-border/30 flex items-center justify-center p-3 hover:shadow-card-hover hover:border-primary/20 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-warm-gray to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-warm-gray to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee-reverse items-center">
              {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex-shrink-0 mx-4 w-[140px] h-[70px] md:w-[180px] md:h-[80px] bg-white rounded-xl shadow-sm border border-border/30 flex items-center justify-center p-3 hover:shadow-card-hover hover:border-primary/20 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Flex badge */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex items-center gap-3 bg-navy rounded-full pl-5 pr-6 py-3 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sans text-sm text-white/90">
                <strong className="text-white">Físico + Flex:</strong> +80 mil
                farmácias em todo Brasil
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
