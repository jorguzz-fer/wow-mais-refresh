import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Nossa Empresa",
    href: "#about",
    submenu: [
      { label: "Quem Somos", href: "#about" },
      { label: "Nossa Missão", href: "#about" },
    ],
  },
  {
    label: "Serviços",
    href: "#services",
    submenu: [
      { label: "WOW+Saúde", href: "#services" },
      { label: "WOW+Assistencial", href: "#services" },
      { label: "WOW+Clube", href: "#services" },
      { label: "WOW+SAF", href: "#services" },
    ],
  },
  { label: "Oportunidade de Negócios", href: "#pricing" },
  { label: "Contato", href: "#contact" },
  { label: "Insights", href: "#blog" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar - only visible when NOT scrolled */}
      <div
        className={`bg-navy text-secondary-foreground py-2 text-sm hidden lg:block transition-all duration-300 ${
          scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100"
        }`}
      >
        <div className="container flex justify-center items-center">
          <span className="flex items-center gap-2">
            <span className="text-orange">❤</span> O que mais Importa?
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "container max-w-6xl mx-auto bg-navy/30 backdrop-blur-xl rounded-full shadow-lg border border-secondary-foreground/10"
              : "bg-background"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              scrolled
                ? "px-6 h-16"
                : "container h-20"
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center">
              <img
                src={scrolled ? logoLight : logoDark}
                alt="WOW Mais"
                className={`transition-all duration-300 ${
                  scrolled ? "h-8" : "h-12"
                }`}
              />
              {scrolled && (
                <div className="hidden lg:block w-px h-8 bg-secondary-foreground/20 ml-6" />
              )}
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`px-3 py-2 font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                      scrolled
                        ? "text-secondary-foreground/80 hover:text-primary-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-3 h-3" />}
                  </a>
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 py-2 min-w-[200px] rounded-lg shadow-card-hover ${
                          scrolled
                            ? "bg-navy-light/95 backdrop-blur-lg border border-secondary-foreground/10 mt-3"
                            : "bg-card border border-border"
                        }`}
                      >
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              scrolled
                                ? "text-secondary-foreground/70 hover:text-primary-foreground hover:bg-secondary-foreground/5"
                                : "text-foreground hover:bg-muted hover:text-primary"
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA / Phone */}
            <div className="hidden lg:flex items-center gap-4">
              {scrolled ? (
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-orange">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="font-sans text-sm font-semibold">
                    Entrar
                  </span>
                </a>
              ) : (
                <a
                  href="https://app.wowmais.com.br/"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Entrar
                </a>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${
                scrolled ? "text-secondary-foreground" : "text-foreground"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden ${
                scrolled
                  ? "mx-4 mt-2 rounded-2xl bg-navy/95 backdrop-blur-xl border border-secondary-foreground/10"
                  : "bg-card border-t border-border"
              }`}
            >
              <nav className="px-6 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 font-sans text-sm font-medium ${
                      scrolled
                        ? "text-secondary-foreground/80 hover:text-primary-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://app.wowmais.com.br/"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-sans text-sm font-semibold text-center mt-2"
                >
                  Entrar
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
