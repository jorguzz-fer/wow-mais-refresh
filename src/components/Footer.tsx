import { useState } from "react";
import { motion } from "framer-motion";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
  Heart,
  CaretDown,
  Phone,
  EnvelopeSimple,
  MapPin,
  ArrowUpRight,
  Headset,
  WhatsappLogo,
} from "@phosphor-icons/react";

const logo = "/logo/logo-light.png";

const footerSections = [
  {
    title: "Como Funciona",
    links: [
      "O que é a WOW+",
      "Como funciona a assinatura",
      "O que está incluso no plano",
      "Diferença: não é plano de saúde",
      "Como usar os serviços",
    ],
  },
  {
    title: "Planos e Assinatura",
    links: [
      "Individual",
      "Familiar",
      "Empresarial",
      "Preços e benefícios",
      "Como contratar",
      "Formas de pagamento",
      "Cashback WOW+",
    ],
  },
  {
    title: "Nossos Serviços",
    links: [
      "WOW+ Med (Saúde)",
      "WOW+ Clube",
      "WOW+ Cine",
      "WOW+ SAF (Assistência Familiar)",
    ],
  },
  {
    title: "Ganhe com a WOW+",
    links: [
      "Seja um consultor",
      "Renda recorrente",
      "Plano de carreira",
      "Treinamentos (10 Passos WOW+)",
      "Área do consultor",
    ],
  },
  {
    title: "Atendimento e Suporte",
    links: [
      "Fale com um consultor",
      "Central de atendimento 24h",
      "WhatsApp",
      "Área do cliente",
      "Abrir chamado",
    ],
  },
  {
    title: "Conteúdo & Educação",
    links: [
      "Blog WOW+",
      "Dicas de saúde",
      "Qualidade de vida",
      "Educação financeira",
      "Vídeos explicativos",
    ],
  },
  {
    title: "Institucional",
    links: [
      "Sobre a WOW+",
      "Nossa missão",
      "Tecnologia & inovação",
      "Onde estamos",
      "Parceiros e rede",
    ],
  },
  {
    title: "Legal & Segurança",
    links: [
      "Termos de uso",
      "Política de privacidade (LGPD)",
      "Contrato do cliente",
      "Contrato do consultor",
      "Código de conduta",
      "Segurança de dados",
    ],
  },
  {
    title: "Empresas & Parcerias",
    links: [
      "Soluções para empresas",
      "Benefício corporativo",
      "Seja parceiro WOW+",
      "Indique empresas",
    ],
  },
];

const quickLinks = [
  { label: "Login", href: "https://app.wowmais.com.br/" },
  { label: "Ativar plano", href: "#" },
  { label: "Baixar app", href: "#" },
  { label: "Segunda via boleto", href: "#" },
  { label: "Atualizar cadastro", href: "#" },
];

const socialLinks = [
  { Icon: InstagramLogo, href: "#", label: "Instagram" },
  { Icon: FacebookLogo, href: "#", label: "Facebook" },
  { Icon: LinkedinLogo, href: "#", label: "LinkedIn" },
  { Icon: YoutubeLogo, href: "#", label: "YouTube" },
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ── CTA Banner ── */}
      <div className="relative bg-gradient-orange py-16 lg:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Cuide do que mais importa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Saúde, assistência e vantagens para você e toda sua família.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-dark px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Conheça os planos
              <ArrowUpRight size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/10 transition-all"
            >
              <WhatsappLogo size={20} weight="fill" />
              Fale conosco
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Quick Links Bar ── */}
      <div className="bg-navy-dark border-b border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <span className="font-sans text-xs text-white/30 uppercase tracking-widest mr-2">
              Acesso rápido
            </span>
            {quickLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/60 hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="bg-navy relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 pt-16 lg:pt-20 pb-12">
          {/* Top row: Logo + Contact + Social */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4">
              <img
                src={logo}
                alt="WOW Mais"
                className="w-[200px] mb-6"
              />
              <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm mb-8">
                A WOW+ é uma plataforma de serviços e benefícios em saúde que
                democratiza o acesso a cuidados médicos, assistência e
                vantagens exclusivas para toda a família.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} weight="fill" className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  info: "0800 123 4567",
                  sub: "Seg a Sex, 8h às 20h",
                },
                {
                  icon: Headset,
                  title: "Suporte 24h",
                  info: "WhatsApp",
                  sub: "Atendimento imediato",
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  info: "Osasco, SP",
                  sub: "Brasil",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon size={22} weight="duotone" className="text-primary" />
                  </div>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                    {card.title}
                  </p>
                  <p className="font-display text-base font-semibold text-white mb-0.5">
                    {card.info}
                  </p>
                  <p className="font-sans text-xs text-white/40">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* ── Links Grid: Desktop ── */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors duration-200 leading-relaxed inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Links Accordion: Mobile ── */}
          <div className="lg:hidden mb-12 space-y-0">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {section.title}
                  </h4>
                  <CaretDown
                    size={16}
                    className={`text-white/40 transition-transform duration-300 ${
                      expandedSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === section.title ? "auto" : 0,
                    opacity: expandedSection === section.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="pb-4 pl-4 space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Disclaimer */}
            <p className="font-sans text-[11px] text-white/25 leading-relaxed max-w-3xl text-center lg:text-left">
              A WOW+ é uma plataforma de serviços e benefícios em saúde, que
              oferece acesso a telemedicina, descontos em consultas, exames e
              medicamentos por meio de parceiros e rede credenciada.{" "}
              <strong className="text-white/40">
                A WOW+ não é plano de saúde.
              </strong>
            </p>

            {/* Copyright */}
            <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
              <p className="font-sans text-xs text-white/30 flex items-center gap-1.5">
                © {new Date().getFullYear()} WOW Mais. Todos os direitos
                reservados.
              </p>
              <p className="font-sans text-[11px] text-white/20 flex items-center gap-1">
                Feito com{" "}
                <Heart size={14} weight="fill" className="text-primary" /> no
                Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
