import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CeoGreeting from "@/components/CeoGreeting";
import CompanyInfo from "@/components/CompanyInfo";
import WhyUs from "@/components/WhyUs";
import { Target, Heart, Leaf } from "lucide-react";

interface AboutPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const AboutPage = ({ lang, setLang }: AboutPageProps) => {
  const philosophy = [
    {
      icon: Target,
      title: { jp: "ミッション", vi: "Sứ mệnh", en: "Mission" },
      desc: {
        jp: "お客様の不用品処理の負担を軽減し、まだ使えるものに新しい命を吹き込みます。",
        vi: "Giảm gánh nặng xử lý đồ không dùng và mang lại sự sống mới cho những vật dụng còn giá trị.",
        en: "Reduce the burden of junk disposal and breathe new life into items that still have value.",
      },
    },
    {
      icon: Heart,
      title: { jp: "価値観", vi: "Giá trị", en: "Values" },
      desc: {
        jp: "誠実さ、迅速な対応、お客様第一のサービスを大切にしています。",
        vi: "Chúng tôi trân trọng sự chân thành, phản hồi nhanh và dịch vụ lấy khách hàng làm trung tâm.",
        en: "We value integrity, rapid response, and customer-first service.",
      },
    },
    {
      icon: Leaf,
      title: { jp: "環境への取り組み", vi: "Cam kết môi trường", en: "Environmental Commitment" },
      desc: {
        jp: "リユース・リサイクルを推進し、廃棄物の削減と持続可能な社会の実現に貢献します。",
        vi: "Thúc đẩy tái sử dụng và tái chế, đóng góp vào việc giảm thiểu rác thải và xây dựng xã hội bền vững.",
        en: "Promoting reuse and recycling to reduce waste and build a sustainable society.",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />

      <section className="pt-24 pb-12 section-padding bg-primary/10">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            {t(translations.nav.about, lang)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            {lang === "jp"
              ? "VC GROUPの理念と会社概要をご紹介します。"
              : lang === "vi"
              ? "Giới thiệu về triết lý và tổng quan công ty VC GROUP."
              : "Learn about VC GROUP's philosophy and company overview."}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground"
          >
            {lang === "jp" ? "私たちの理念" : lang === "vi" ? "Triết lý của chúng tôi" : "Our Philosophy"}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="card-3d bg-card rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-eco-green/10 flex items-center justify-center">
                    <Icon className="text-eco-green" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{t(item.title, lang)}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CeoGreeting lang={lang} />
      <WhyUs lang={lang} />
      <CompanyInfo lang={lang} />
      <Footer />
    </div>
  );
};

export default AboutPage;
