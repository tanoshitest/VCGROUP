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

import aptBefore from "@/assets/apt-before.png";
import aptAfter from "@/assets/apt-after.png";

import mascot from "@/assets/mascot.png";

import diary1 from "@/assets/work-diary-1.png";
import diary2 from "@/assets/work-diary-2.png";
import diary3 from "@/assets/work-diary-3.png";
import diary4 from "@/assets/work-diary-4.png";
import diary5 from "@/assets/work-diary-5.png";

import trustStaff from "@/assets/trust_staff.jpg";
import trustTruck from "@/assets/trust_truck.jpg";
import trustTime from "@/assets/trust_time.jpg";
import trustEco from "@/assets/trust_eco.jpg";

const images = [project1, project2, project3, project4, project5, project6];
const diaryImages = [
  { src: diary1, className: "w-64 aspect-[4/3] rounded-2xl" },
  { src: diary2, className: "w-96 aspect-video rounded-3xl" },
  { src: diary3, className: "w-72 aspect-square rounded-full" },
  { src: diary4, className: "w-80 aspect-[16/10] rounded-tl-3xl rounded-br-3xl" },
  { src: diary5, className: "w-56 aspect-[3/4] rounded-xl" },
];

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

  const beforeImages: Record<string, string> = {
    "apartment-junk": aptBefore,
  };

  const afterImages: Record<string, string> = {
    "apartment-junk": aptAfter,
  };

  const currentBeforeImage = beforeImages[project.id];
  const currentAfterImage = afterImages[project.id] || images[projectIndex];

  const renderTrustBadge = (imageSrc: string, title: string, desc: string) => (
    <div className="flex flex-col bg-background rounded-2xl shadow-sm border border-border overflow-hidden col-span-1 group hover:shadow-md transition-shadow">
      <div className="w-full h-48 sm:h-56 overflow-hidden">
         <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h4 className="font-heading font-bold text-lg text-primary mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
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
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center border border-border">
                <span className="absolute top-4 left-4 z-10 bg-vc-black/50 text-white px-3 py-1 rounded-md text-sm font-body shadow-sm">BEFORE</span>
                {currentBeforeImage ? (
                  <img src={currentBeforeImage} className="w-full h-full object-cover" alt="Before" />
                ) : (
                  <p className="text-muted-foreground px-8 text-center font-body">{t(project.before, lang)}</p>
                )}
              </div>
              <p className="text-sm font-body italic text-muted-foreground">
                * {lang === "vi" ? "Hiện trạng thực tế khi khảo sát" : "Original condition during survey"}
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
                <span className="absolute top-4 left-4 z-10 bg-eco-green text-white px-3 py-1 rounded-md text-sm font-body shadow-sm">AFTER</span>
                <img src={currentAfterImage} className="w-full h-full object-cover" alt="Result" />
              </div>
              <p className="text-sm font-body text-foreground font-semibold">
                 {t(project.after, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
           <div className="bg-primary/5 p-8 md:p-14 lg:pr-80 rounded-[32px] md:rounded-[48px] relative border border-primary/10">
              <div className="relative z-10 lg:max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                  {lang === "vi" ? "Câu chuyện đằng sau dự án" : lang === "jp" ? "プロジェクトの裏話" : "Project Story"}
                </h3>
                <p className="text-lg font-body text-foreground/80 leading-relaxed">
                  {t(project.reuseStory, lang)}
                </p>
              </div>
              
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 lg:-right-4 z-20 mix-blend-multiply pointer-events-none">
                 <img src={mascot} alt="VC Group Mascot" className="w-80 lg:w-[380px] h-auto object-contain" />
              </div>
           </div>
        </div>
      </section>

      {/* Work Diary Gallery Section */}
      <section className="py-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
             {lang === "vi" ? "Nhật ký làm việc" : lang === "jp" ? "作業の様子" : "Company Work Diary"}
          </h2>
          <p className="text-muted-foreground font-body">
            {lang === "vi" 
              ? "Một số hình ảnh thực tế từ các dự án của đội ngũ VC GROUP." 
              : "Glimpses behind the scenes as our team completes various projects."}
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
          <div className="inline-flex gap-8 items-center animate-marquee w-max select-none hover:[animation-play-state:paused] pr-8">
            {/* Array doubled for seamless seamless loop */}
            {[...diaryImages, ...diaryImages].map((img, i) => (
              <img
                key={i}
                src={img.src}
                className={`${img.className} object-cover shadow-md pointer-events-none flex-shrink-0 transition-transform hover:scale-105 duration-300`}
                alt="Work Diary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
               {lang === "vi" ? "Cam kết chất lượng Nhật Bản" : "Japanese Standard Commitment"}
            </h2>
            <p className="text-muted-foreground font-body">
              {lang === "vi" ? "Niềm tin của khách hàng là ưu tiên hàng đầu của chúng tôi." : "Building trust through professional service."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {renderTrustBadge(trustStaff, lang === "vi" ? "Đội ngũ chuyên nghiệp" : "Professional Staff", "Thân thiện, nhiệt tình, có trách nhiệm cao. Đội ngũ nhân viên giàu kinh nghiệm luôn đặt sự hài lòng của khách hàng lên hàng đầu.")}
            {renderTrustBadge(trustTruck, lang === "vi" ? "Xe tải hiện đại" : "Modern Fleet", "Vận hành êm ái, đảm bảo an toàn hàng hóa. Đội xe đa dạng kích cỡ phù hợp cho mọi nhu cầu vận chuyển lớn nhỏ.")}
            {renderTrustBadge(trustTime, lang === "vi" ? "Đúng tiến độ" : "On Time", "Luôn hoàn thành công việc theo lịch hẹn. Chúng tôi tuân thủ nghiêm ngặt thời gian và tối ưu hóa quy trình để xử lý nhanh chóng.")}
            {renderTrustBadge(trustEco, lang === "vi" ? "Thân thiện môi trường" : "Eco Friendly", "Tối đa hóa tái sử dụng, giảm thiểu rác thải. Chúng tôi phân loại nghiêm ngặt và hợp tác các trạm tái chế đúng quy định pháp luật.")}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
