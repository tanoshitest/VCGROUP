import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowLeft, Play, Info } from "lucide-react";

interface ServiceDetailPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ServiceDetailPage = ({ lang, setLang }: ServiceDetailPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = translations.services.items.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate("/services")} className="btn-primary">
          Service not found. Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      <main className="section-padding">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={20} />
            <span>{lang === "vi" ? "Quay lại dịch vụ" : lang === "jp" ? "サービス一覧に戻る" : "Back to Services"}</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                <Info size={16} />
                {lang === "vi" ? "Chi tiết dịch vụ" : lang === "jp" ? "サービス詳細" : "Service Details"}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                {t(service.title, lang)}
              </h1>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {t(service.detail!, lang)}
                </p>
                <p className="text-foreground/90 leading-loose">
                  {lang === "vi" 
                    ? "Tại VC GROUP, chúng tôi cam kết mang lại sự hài lòng tối đa thông qua quy trình làm việc chuyên nghiệp, đội ngũ nhân viên tận tâm và giá cả minh bạch. Mọi công đoạn từ khảo sát đến thực thi đều được giám sát chặt chẽ theo tiêu chuẩn chất lượng Nhật Bản."
                    : lang === "jp"
                    ? "VC GROUPは、プロフェッショナルな作業プロセス、献身的なスタッフ、そして透明性の高い価格設定を通じて、お客様に最大限の満足をお届けすることをお約束します。現地調査から施工まで、すべての工程が日本品質の基準で厳格に管理されています。"
                    : "At VC GROUP, we are committed to delivering maximum satisfaction through professional workflows, dedicated staff, and transparent pricing. Every stage from site inspection to execution is strictly monitored according to Japanese quality standards."}
                </p>
              </div>

              <div className="mt-12">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  {lang === "vi" ? "Đăng ký tư vấn ngay" : lang === "jp" ? "今すぐ相談する" : "Inquire Now"}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border group relative">
                <img
                  src={service.image}
                  alt={t(service.title, lang)}
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-vc-black/20 group-hover:bg-vc-black/10 transition-colors" />
              </div>

              {service.video && (
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-vc-black aspect-video relative group">
                  <iframe
                    className="w-full h-full"
                    src={service.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default ServiceDetailPage;
