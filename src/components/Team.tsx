import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import teamImg from "@/assets/team-photo.png";

interface TeamProps {
  lang: Language;
}

const Team = ({ lang }: TeamProps) => {
  const { title, text } = (translations as any).team;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
              {t(title, lang)}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {lang === "vi" ? "Đội ngũ chuyên nghiệp & Tận tâm" : lang === "jp" ? "プロフェッショナルで献身的なチーム" : "Professional & Dedicated Team"}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              {t(text, lang)}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{lang === "vi" ? "Tận tâm" : "Dedicated"}</div>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                <div className="text-2xl font-bold text-eco-green mb-1">Standard</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{lang === "vi" ? "Chất lượng Nhật" : "Japanese Quality"}</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background">
              <img
                src={teamImg}
                alt="VC Group Team"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-vc-yellow/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
