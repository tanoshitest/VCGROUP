import { Phone, Mail, MapPin, Clock, Globe, Facebook, MessageCircle } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

interface FooterProps {
  lang: Language;
}

const Footer = ({ lang }: FooterProps) => {
  const c = translations.company;

  return (
    <footer className="bg-background border-t border-border py-12 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Name & Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-foreground uppercase tracking-wide">
              {c.name}
            </h3>
            <p className="text-sm font-body text-foreground font-medium mb-4">
               {lang === "vi" ? `Công ty ${c.name}` : c.name}
            </p>
            <div className="space-y-3 text-sm font-body text-muted-foreground mt-4 shrink-0">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">{c.address.value}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">{t(c.openingHours.label, lang)}: {t(c.openingHours.value, lang)}</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={18} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">{t(c.serviceArea.label, lang)}: {c.serviceArea.value}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact & Social Media */}
          <div className="space-y-4">
            <h3 className="text-base font-heading font-bold text-foreground uppercase tracking-wide">
              {t(c.contact, lang)}
            </h3>
            <div className="space-y-3 text-sm font-body text-muted-foreground mb-8">
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>{c.phone.value}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>{c.email.value}</span>
              </div>
            </div>
            
            <h3 className="text-base font-heading font-bold text-foreground uppercase tracking-wide pt-2">
              {t(c.social, lang)}
            </h3>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
                <Facebook size={20} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#06C755] text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-sm">
                <MessageCircle size={20} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>

          {/* Column 3: Company Info Details */}
          <div className="space-y-4">
            <h3 className="text-base font-heading font-bold text-foreground uppercase tracking-wide">
              {t(c.title, lang)}
            </h3>
            <div className="space-y-2 text-sm font-body text-muted-foreground">
               <p className="mt-3">{t(c.established.label, lang)}: {c.established.value}</p>
               <p className="mt-1">{t(c.capital.label, lang)}: {c.capital.value}</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/80 pt-6 mt-4 text-center text-xs font-body text-muted-foreground/80">
          {translations.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
