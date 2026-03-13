const logo = "/logo/logo-light.png";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="WOW Mais" className="h-10 mb-4" />
            <p className="font-sans text-sm text-secondary-foreground/60 leading-relaxed">
              Cuidando do que mais importa. Saúde, assistência e vantagens para você e toda sua família.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-semibold text-secondary-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              {["WOW+Saúde", "WOW+Assistencial", "WOW+Clube", "WOW+SAF"].map((item) => (
                <li key={item}>
                  <a href="#services" className="font-sans text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-secondary-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {["Quem Somos", "Oportunidade de Negócios", "Insights", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#about" className="font-sans text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-secondary-foreground mb-4">Contato</h4>
            <ul className="space-y-2 font-sans text-sm text-secondary-foreground/60">
              <li>contato@wowmais.com.br</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-xs text-secondary-foreground/40 max-w-3xl">
            A WOW+ é uma plataforma de serviços e benefícios em saúde, que oferece acesso a telemedicina, descontos em consultas, exames e medicamentos por meio de parceiros e rede credenciada. A WOW+ não é plano de saúde.
          </p>
          <p className="font-sans text-xs text-secondary-foreground/40 shrink-0">
            © {new Date().getFullYear()} WOW Mais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
