import { motion } from "framer-motion";
import { Heart, Shield, Tag, Flower2 } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "WOW+Saúde",
    description: "Telemedicina 24h, descontos em farmácias, consultas online e muito mais para cuidar da sua saúde.",
    link: "https://app.wowmais.com.br/subscription-page/rebqcftkr4oxb4z49hrtf1yb",
  },
  {
    icon: Shield,
    title: "WOW+Assistencial",
    description: "Assistência e segurança quando você mais precisa. Serviços de emergência para você e sua família.",
    link: "https://app.wowmais.com.br/subscription-page/lu2p0s9qhnd8ud08t1omhc11",
  },
  {
    icon: Tag,
    title: "WOW+Clube",
    description: "Descontos e cashback em mais de 10 mil estabelecimentos em todo o Brasil.",
    link: "https://app.wowmais.com.br/subscription-page/zgnbp66s9yejzr7g387nn7jf",
  },
  {
    icon: Flower2,
    title: "WOW+SAF",
    description: "Serviço de assistência funeral completo para garantir tranquilidade nos momentos difíceis.",
    link: "https://app.wowmais.com.br/subscription-page/cf5uffvmnpi7p53vrlnp7xpj",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-warm-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Soluções completas para{" "}
            <span className="text-gradient">você e sua família</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
            Oferecemos planos acessíveis de saúde, assistência, clube de vantagens e muito mais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-primary font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Saiba mais →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
