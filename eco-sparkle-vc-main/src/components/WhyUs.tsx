import { motion } from "framer-motion";
import { Clock, Truck, ShieldCheck, Leaf } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

const icons = [Clock, Truck, ShieldCheck, Leaf];

interface WhyUsProps {
  lang: Language;
}

const WhyUs = ({ lang }: WhyUsProps) => {
  const { title, items } = translations.whyUs;

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t(title, lang)}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-3d bg-card rounded-xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-eco-green/10 flex items-center justify-center">
                  <Icon className="text-eco-green" size={28} />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3 text-foreground">{t(item.title, lang)}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
