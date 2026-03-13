import { Phone, Mail, MapPin } from "lucide-react";
import { translations } from "@/lib/i18n";

const Footer = () => {
  const c = translations.company;

  return (
    <footer className="bg-vc-black text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-heading font-bold">
              VC <span className="text-vc-yellow">GROUP</span>
            </span>
            <p className="mt-3 text-sm text-accent-foreground/70 font-body">{c.name}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-body text-accent-foreground/80">
              <Phone size={16} className="text-vc-yellow" /> {c.phone.value}
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-accent-foreground/80">
              <Mail size={16} className="text-vc-yellow" /> {c.email.value}
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm font-body text-accent-foreground/80">
            <MapPin size={16} className="text-vc-yellow mt-0.5 flex-shrink-0" />
            {c.address.value}
          </div>
        </div>
        <div className="border-t border-accent-foreground/10 pt-6 text-center text-xs font-body text-accent-foreground/50">
          {translations.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
