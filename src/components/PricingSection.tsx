import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "WOW+Saúde",
    price: "29",
    period: "/mês",
    description: "Saúde inteligente e acessível",
    features: [
      "Telemedicina 24h",
      "Descontos em farmácias",
      "Consultas online",
      "Pronto atendimento virtual",
    ],
    link: "https://app.wowmais.com.br/subscription-page/rebqcftkr4oxb4z49hrtf1yb",
    highlighted: false,
  },
  {
    name: "WOW+Assistencial",
    price: "39",
    period: "/mês",
    description: "Proteção completa para sua família",
    features: [
      "Tudo do WOW+Saúde",
      "Assistência emergencial",
      "Seguro pessoal",
      "Suporte dedicado",
    ],
    link: "https://app.wowmais.com.br/subscription-page/lu2p0s9qhnd8ud08t1omhc11",
    highlighted: true,
  },
  {
    name: "WOW+Clube",
    price: "19",
    period: "/mês",
    description: "Vantagens e cashback exclusivos",
    features: [
      "Descontos em 10 mil+ lojas",
      "Cashback em compras",
      "Ofertas exclusivas",
      "App com benefícios",
    ],
    link: "https://app.wowmais.com.br/subscription-page/zgnbp66s9yejzr7g387nn7jf",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-navy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Nossos Planos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
            Planos flexíveis para{" "}
            <span className="text-gradient">cada necessidade</span>
          </h2>
          <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
            Escolha o plano ideal para você e sua família. Sem burocracia, 100% digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-2 ring-primary scale-105"
                  : "bg-navy-light text-secondary-foreground border border-secondary-foreground/10"
              }`}
            >
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p
                className={`font-sans text-sm mt-1 ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-secondary-foreground/60"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6 mb-8">
                <span className="font-display text-5xl font-bold">
                  R${plan.price}
                </span>
                <span
                  className={`font-sans text-sm ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-secondary-foreground/50"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-sans text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full font-sans font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground hover:bg-navy-dark"
                    : "bg-primary text-primary-foreground hover:bg-orange-dark shadow-orange"
                }`}
              >
                Começar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
