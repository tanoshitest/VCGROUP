import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Recycle, Truck, Users } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const images = [project1, project2, project3, project4, project5, project6];

interface ProjectDetailPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ProjectDetailPage = ({ lang, setLang }: ProjectDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = translations.projects.items.findIndex((item) => item.id === id);
  const project = translations.projects.items[projectIndex];

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderTrustBadge = (icon: any, title: string, desc: string) => (
    <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm border border-border">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h4 className="font-heading font-bold text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground text-center">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-body text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {lang === "vi" ? "Quay lại dự án" : lang === "jp" ? "プロジェクト一覧へ" : "Back to projects"}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {t(project.title, lang)}
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                {lang === "vi" 
                  ? "Dưới đây là chi tiết quá trình chúng tôi thực hiện dự án này, từ khâu khảo sát đến khi hoàn tất bàn giao cho khách hàng."
                  : lang === "jp"
                  ? "現地調査から完了・引き渡しまでの詳細なプロセスをご紹介します。"
                  : "Explore the detailed process of this project, from initial survey to final handover."}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-eco-green text-white rounded-full text-sm font-body">
                  #EcoSparkle
                </span>
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body">
                  #JapaneseQuality
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={images[projectIndex]}
                alt={t(project.title, lang)}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-16 underline decoration-primary decoration-4 underline-offset-8">
            {lang === "vi" ? "Trước & Sau khi thực hiện" : lang === "jp" ? "ビフォー・アフター" : "Before & After"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden h-64 bg-muted flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-vc-black/50 text-white px-3 py-1 rounded-md text-sm">BEFORE</span>
                <p className="text-muted-foreground px-8 text-center">{t(project.before, lang)}</p>
              </div>
              <p className="text-sm font-body italic text-muted-foreground italic">
                * {lang === "vi" ? "Hiện trạng thực tế khi khảo sát" : "Original condition during survey"}
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden h-64 shadow-lg">
                <span className="absolute top-4 left-4 z-10 bg-eco-green text-white px-3 py-1 rounded-md text-sm">AFTER</span>
                <img src={images[projectIndex]} className="w-full h-full object-cover" alt="Result" />
              </div>
              <p className="text-sm font-body text-foreground font-semibold">
                 {t(project.after, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section className="section-padding bg-eco-green/5">
        <div className="container mx-auto max-w-4xl">
           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-eco-green/10 rounded-2xl flex items-center justify-center text-eco-green shrink-0">
                <Recycle size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-eco-green mb-4">
                  {lang === "vi" ? "Câu chuyện tái sử dụng" : lang === "jp" ? "リユース・環境への取り組み" : "Sustainability Spotlight"}
                </h3>
                <p className="text-lg font-body text-foreground leading-relaxed">
                  {t(project.reuseStory, lang)}
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
               {lang === "vi" ? "Cam kết chất lượng Nhật Bản" : "Japanese Standard Commitment"}
            </h2>
            <p className="text-muted-foreground font-body">
              {lang === "vi" ? "Niềm tin của khách hàng là ưu tiên hàng đầu của chúng tôi." : "Building trust through professional service."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {renderTrustBadge(<Users />, lang === "vi" ? "Đội ngũ chuyên nghiệp" : "Professional Staff", "Thân thiện, nhiệt tình, có trách nhiệm cao")}
            {renderTrustBadge(<Truck />, lang === "vi" ? "Xe tải hiện đại" : "Modern Fleet", "Vận hành êm ái, đảm bảo an toàn hàng hóa")}
            {renderTrustBadge(<CheckCircle2 />, lang === "vi" ? "Đúng tiến độ" : "On Time", "Luôn hoàn thành công việc theo lịch hẹn")}
            {renderTrustBadge(<Recycle />, lang === "vi" ? "Thân thiện môi trường" : "Eco Friendly", "Tối đa hóa tái sử dụng, giảm thiểu rác thải")}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
