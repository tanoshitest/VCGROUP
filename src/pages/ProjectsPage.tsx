import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const images = [project1, project2, project3, project4, project5, project6];

const projectDescriptions = [
  {
    jp: "マンション全体の不用品を一括回収。大型家具・家電も丁寧に搬出しました。",
    vi: "Thu gom toàn bộ đồ không dùng trong chung cư. Vận chuyển cẩn thận đồ nội thất lớn.",
    en: "Bulk junk removal from an entire apartment building, including careful handling of large furniture.",
  },
  {
    jp: "業務用エアコン3台の取付工事を迅速に完了。動作確認も徹底しました。",
    vi: "Lắp đặt nhanh chóng 3 máy điều hòa công nghiệp. Kiểm tra vận hành kỹ lưỡng.",
    en: "Quick installation of 3 commercial AC units with thorough operational testing.",
  },
  {
    jp: "状態の良いソファ・テーブルをクリーニングし、中古品として再販売しました。",
    vi: "Vệ sinh sofa và bàn còn tốt, bán lại như đồ second-hand.",
    en: "Cleaned quality sofas and tables for resale as secondhand furniture.",
  },
  {
    jp: "工場の産業廃棄物を法令に基づき適正に収集・運搬しました。",
    vi: "Thu gom và vận chuyển rác thải công nghiệp từ nhà máy đúng quy định.",
    en: "Legally compliant collection and transport of industrial waste from a factory.",
  },
  {
    jp: "オフィス移転に伴う不用品の一括処理。迅速かつ丁寧な作業でお客様に満足いただけました。",
    vi: "Xử lý đồ không dùng khi chuyển văn phòng. Khách hàng hài lòng với dịch vụ nhanh và cẩn thận.",
    en: "Bulk disposal during office relocation. Clients were satisfied with our fast, careful service.",
  },
  {
    jp: "引越し時の大量不用品を即日回収。分別作業も全てスタッフが対応しました。",
    vi: "Thu gom đồ không dùng ngay trong ngày khi chuyển nhà. Nhân viên xử lý toàn bộ phân loại.",
    en: "Same-day junk pickup during a move. Staff handled all sorting and disposal.",
  },
];

interface ProjectsPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ProjectsPage = ({ lang, setLang }: ProjectsPageProps) => {
  const { title, items } = translations.projects;

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
            {t(title, lang)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            {lang === "jp"
              ? "これまでの施工事例をご紹介します。"
              : lang === "vi"
              ? "Giới thiệu các dự án của chúng tôi."
              : "Browse our past projects."}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-3d bg-card rounded-xl overflow-hidden"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={images[i]}
                    alt={t(item, lang)}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-vc-black/0 group-hover:bg-vc-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {t(item, lang)}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {t(projectDescriptions[i], lang)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
