import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const stats = [
  { value: "10k+", label: "Estabelecimentos Parceiros" },
  { value: "24h", label: "Atendimento Disponível" },
  { value: "100%", label: "Digital e Acessível" },
  { value: "500+", label: "Famílias Atendidas" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              O que mais importa?{" "}
              <span className="text-gradient">Cuidar de você.</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
              A WOW Mais é uma empresa de saúde e serviços que acredita que todos
              merecem acesso a cuidados de qualidade. Nossos planos são pensados
              para oferecer saúde inteligente, assistência completa e vantagens
              exclusivas para você e toda sua família.
            </p>
            <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
              Com soluções 100% digitais e acessíveis, estamos transformando a
              forma como as pessoas cuidam da saúde no Brasil.
            </p>
            <a
              href="#services"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold hover:bg-orange-dark transition-colors shadow-orange"
            >
              Conheça Nossos Serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Equipe WOW Mais"
              className="rounded-2xl shadow-card-hover w-full"
            />
            {/* Stats overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
