import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  lang: Language;
}

const sloganGroups = {
  jp: [
    "ゴミを宝に。地球と未来のために。",
    "環境に優しい。社会に貢献する。",
    "心あるサービス。確かな技術で。"
  ],
  vi: [
    "Biến đồ cũ thành giá trị. Vì môi trường xanh.",
    "Tận tâm phục vụ. Vì tương lai bền vững.",
    "Giải pháp tối ưu. Đồng hành cùng phát triển."
  ],
  en: [
    "Turning junk into value. For a greener planet.",
    "Dedicated service. For a sustainable future.",
    "Optimal solutions. Growing together."
  ],
};

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const text = texts[currentTextIdx];

  useEffect(() => {
    // Reset when texts array changes (language change)
    setDisplayed("");
    setCharIdx(0);
    setIsDeleting(false);
    setCurrentTextIdx(0);
  }, [texts]);

  useEffect(() => {
    const typingSpeed = 60; // 20% slower than 50ms
    const deletingSpeed = 40; // slightly faster than typing
    
    if (!isDeleting && charIdx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[charIdx]);
        setCharIdx((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && charIdx === text.length) {
      // Pause at the end before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIdx > 0) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIdx((i) => i - 1);
      }, deletingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setCurrentTextIdx((prev) => (prev + 1) % texts.length);
    }
  }, [charIdx, isDeleting, text, texts, currentTextIdx]);

  return (
    <span className="inline-block whitespace-nowrap overflow-hidden">
      {displayed}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

const Hero = ({ lang }: HeroProps) => {
  const texts = sloganGroups[lang] || sloganGroups.jp;

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
        className="relative z-10 text-center px-4 w-full max-w-5xl"
      >
        {/* Typewriter slogan - Infinite loop with 3 phrases */}
        <div className="flex justify-center items-center h-20 md:h-28">
          <motion.div
            className="text-2xl md:text-5xl lg:text-6xl font-heading font-bold text-yellow-300 tracking-wide"
          >
            <Typewriter texts={texts} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
