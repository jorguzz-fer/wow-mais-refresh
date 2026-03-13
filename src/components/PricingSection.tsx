import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "WOW+ Saúde - Pessoa Jurídica",
    price: "19",
    period: "/mês",
    description: "Plano de benefícios e economia",
    tag: "Ideal para quem quer economizar no dia a dia",
    features: [
      "Descontos em mais de 10 mil lojas",
      "Cashback em compras",
      "Ofertas exclusivas",
      "Descontos em restaurantes, eletrônicos, roupas, etc.",
      "Descontos em medicamentos",
      "Conversão de cashback em benefícios e viagens"
    ],
    link: "https://app.wowmais.com.br/",
    highlighted: false,
  },
  {
    name: "WOW+ Saúde - Pessoa Física",
    price: "49,90",
    period: "/mês",
    description: "Plano de saúde digital acessível",
    tag: "Famílias que querem acesso rápido a médicos",
    features: [
      "Médico 24h online",
      "Clínico geral e Pediatria",
      "Mais de 15 especialidades",
      "Receitas e atestados médicos",
      "Descontos em consultas presenciais",
      "Descontos em exames e medicamentos"
    ],
    link: "https://app.wowmais.com.br/",
    highlighted: true,
    familyBonus: "Plano Familiar: Inclui o cônjuge e todos os filhos até 21 anos."
  }
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-3xl p-8 relative flex flex-col h-full ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(253,131,17,0.5)] border border-orange-light ring-4 ring-navy z-10 scale-100 md:scale-105"
                  : "bg-navy-light text-secondary-foreground border border-secondary-foreground/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Mais Escolhido
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p
                className={`font-sans text-base mt-2 ${
                  plan.highlighted ? "text-primary-foreground/90" : "text-secondary-foreground/70"
                }`}
              >
                {plan.description}
              </p>
              
              <div className="mt-6 mb-2">
                <span className="font-sans text-xl top-[-1rem] relative">R$</span>
                <span className="font-display text-6xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`font-sans text-base font-medium ml-1 ${
                    plan.highlighted ? "text-primary-foreground/80" : "text-secondary-foreground/60"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              
              <div className={`text-sm font-semibold font-sans mb-8 py-2 px-4 rounded-full inline-block ${
                 plan.highlighted ? "bg-primary-foreground/15 text-white" : "bg-secondary-foreground/10 text-secondary-foreground/90"
              }`}>
                {plan.tag}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-sans text-base">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-orange"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-secondary-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {plan.familyBonus && (
                <div className="mb-8 p-4 bg-secondary text-secondary-foreground rounded-xl border border-secondary-foreground/10 text-sm font-sans flex items-start gap-3">
                   <div className="text-orange shrink-0 mt-0.5">❤</div>
                   <p className="leading-relaxed"><strong className="block text-orange mb-1">Plano Familiar Incluído!</strong>Estende todos os benefícios para seu cônjuge e todos os filhos até 21 anos.</p>
                </div>
              )}

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 px-6 rounded-full font-sans font-bold text-base transition-colors ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground hover:bg-navy-dark shadow-xl"
                    : "bg-primary text-primary-foreground hover:bg-orange-dark shadow-orange"
                }`}
              >
                Assinar Plano
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
