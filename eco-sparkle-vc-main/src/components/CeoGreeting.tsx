import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import ceoImg from "@/assets/ceo-portrait.jpg";

interface CeoGreetingProps {
  lang: Language;
}

const CeoGreeting = ({ lang }: CeoGreetingProps) => {
  const { title, name, text } = translations.ceo;

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
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={ceoImg}
              alt={name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-primary"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{name}</h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t(text, lang)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CeoGreeting;
