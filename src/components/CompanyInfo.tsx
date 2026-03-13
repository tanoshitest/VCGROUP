import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Banknote, User, Package, Briefcase, FileBadge } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

interface CompanyInfoProps {
  lang: Language;
}

const CompanyInfo = ({ lang }: CompanyInfoProps) => {
  const c = translations.company;

  const details = [
    { icon: User, label: t(c.representative.label, lang), value: c.representative.value },
    { icon: Building2, label: t(c.established.label, lang), value: c.established.value },
    { icon: Banknote, label: t(c.capital.label, lang), value: c.capital.value },
    { icon: MapPin, label: t(c.address.label, lang), value: c.address.value },
    { icon: Package, label: t(c.warehouse.label, lang), value: c.warehouse.value },
    { icon: Phone, label: t(c.phone.label, lang), value: c.phone.value },
    { icon: Mail, label: t(c.email.label, lang), value: c.email.value },
    { icon: Briefcase, label: t(c.business.label, lang), value: t(c.business.value, lang) },
    { icon: FileBadge, label: t(c.licenses.label, lang), value: c.licenses.value },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t(c.title, lang)}
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground text-center lg:text-left">{c.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.map((d, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <d.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      {d.label}
                    </span>
                    <p className="font-body text-foreground whitespace-pre-line leading-relaxed text-sm md:text-base">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border w-full h-[400px] md:h-[500px]"
          >
            <iframe
              title="VC GROUP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.0!2d139.79!3d35.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Z-8546Jt6OKY-mcrOW4guiSsueUn-acrOeUujMtMzA!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
