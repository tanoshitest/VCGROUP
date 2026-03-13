import { motion } from "framer-motion";
import { Phone, FileText, Truck, CheckCircle } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

const icons = [Phone, FileText, Truck, CheckCircle];

interface ProcessProps {
  lang: Language;
}

const Process = ({ lang }: ProcessProps) => {
  const { title, steps } = translations.process;

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-foreground"
        >
          {t(title, lang)}
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start justify-between relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-border" />

          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center w-1/4 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <span className="text-xs font-body font-semibold text-muted-foreground mb-1">
                  STEP {i + 1}
                </span>
                <h3 className="font-heading font-bold text-foreground text-sm">{t(step.title, lang)}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <span className="text-xs font-body font-semibold text-muted-foreground">STEP {i + 1}</span>
                  <h3 className="font-heading font-bold text-foreground">{t(step.title, lang)}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
