import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const langLabels: Record<Language, string> = { jp: "日本語", vi: "Tiếng Việt", en: "English" };

const Header = ({ lang, setLang }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nav = translations.nav;

  const links = [
    { href: "/", label: t(nav.home, lang) },
    { href: "/services", label: t(nav.services, lang) },
    { href: "/reuse-catalog", label: t(nav.reuseCatalog, lang) },
    { href: "/about", label: t(nav.about, lang) },
    { href: "/projects", label: t(nav.projects, lang) },
    { href: "/blog", label: t(nav.blog, lang) },
    { href: "/contact", label: t(nav.contact, lang) },
  ];

  const handleNav = (href: string) => {
    navigate(href);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <span className="text-2xl font-bold font-heading text-vc-black">
            VC <span className="text-vc-yellow">GROUP</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium font-body transition-colors ${
                location.pathname === link.href
                  ? "text-foreground border-b-2 border-primary pb-0.5"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-body text-foreground/80 hover:text-foreground px-3 py-1.5 rounded-md border border-border transition-colors"
            >
              <Globe size={16} />
              <span>{langLabels[lang]}</span>
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[140px]"
                >
                  {(["jp", "vi", "en"] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-body hover:bg-muted transition-colors ${lang === l ? "bg-primary/10 font-semibold" : ""}`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-3">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-sm font-medium font-body text-left py-2 ${
                    location.pathname === link.href
                      ? "text-foreground font-bold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
