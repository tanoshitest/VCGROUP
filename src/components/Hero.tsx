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
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIdx(0);
    setIsDeleting(false);
  }, [text]);

  useEffect(() => {
    const timeout = isDeleting ? 30 : 50;
    
    if (!isDeleting && idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx((i) => i + 1);
      }, timeout);
      return () => clearTimeout(timer);
    } else if (!isDeleting && idx === text.length) {
      // Pause at the end before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (isDeleting && idx > 0) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setIdx((i) => i - 1);
      }, timeout);
      return () => clearTimeout(timer);
    } else if (isDeleting && idx === 0) {
      setIsDeleting(false);
    }
  }, [idx, isDeleting, text]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = ({ lang }: HeroProps) => {
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
        {/* Typewriter slogan - Infinite loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-yellow-300 tracking-wide min-h-[1.5em]"
        >
          <Typewriter text={slogans[lang] ?? slogans.jp} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
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
