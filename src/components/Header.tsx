import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-wowmais.png";

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-secondary-foreground py-2 text-sm hidden lg:block">
        <div className="container flex justify-center items-center">
          <span className="flex items-center gap-2">
            <span className="text-orange">❤</span> O que mais Importa?
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-card"
            : "bg-background"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0">
            <img src={logo} alt="WOW Mais" className="h-12" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 font-sans text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
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
                      className="absolute top-full left-0 bg-card shadow-card-hover rounded-lg py-2 min-w-[200px] border border-border"
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
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

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.wowmais.com.br/"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
            >
              Entrar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <nav className="container py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-foreground hover:text-primary font-sans text-sm font-medium"
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
