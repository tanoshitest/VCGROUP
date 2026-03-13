import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  lang: Language;
}

const slogans = {
  jp: "ゴミを宝に。地球と未来のために。",
  vi: "Biến đồ cũ thành giá trị. Vì môi trường xanh.",
  en: "Turning junk into value. For a greener planet.",
};

const Typewriter = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setDisplayed("");
    setIdx(0);
  }, [text]);

  useEffect(() => {
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx((i) => i + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [idx, text]);

  return (
    <span>
      {displayed}
      {idx < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const Hero = ({ lang }: HeroProps) => {
  const headline = t(translations.hero.headline, lang);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-vc-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Typewriter slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl font-body text-yellow-300 font-semibold mb-6 tracking-wide"
        >
          <Typewriter text={slogans[lang] ?? slogans.jp} />
        </motion.p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-accent-foreground whitespace-pre-line">
          {headline}
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a href="/services" className="btn-primary inline-block text-lg">
            {t(translations.nav.services, lang)}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
