import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Award, PlayCircle } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="mb-6 text-muted-foreground">Service not found.</p>
          <button onClick={() => navigate("/services")} className="btn-primary">
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const usps = [
    { icon: Zap, title: { vi: "Phản hồi nhanh", jp: "スピーディーな対応", en: "Rapid Response" }, desc: { vi: "Hỗ trợ ngay trong ngày khi có yêu cầu.", jp: "お急ぎの場合も即日対応が可能です。", en: "Same-day support upon request." } },
    { icon: ShieldCheck, title: { vi: "Uy tín hàng đầu", jp: "信頼の実績", en: "Trusted Service" }, desc: { vi: "Quy trình minh bạch, rõ ràng.", jp: "透明性の高い適正な処理をお約束します。", en: "Transparent and clear processes." } },
    { icon: Award, title: { vi: "Chuyên nghiệp", jp: "プロの技術", en: "Professionalism" }, desc: { vi: "Đội ngũ nhân viên giàu kinh nghiệm.", jp: "経験豊富なスタッフが丁寧に作業します。", en: "Highly experienced staff." } },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      {/* 1. Hero / Header Section */}
      <section className="py-16 md:py-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group w-fit"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{lang === "vi" ? "Quay lại danh sách dịch vụ" : lang === "jp" ? "サービス一覧に戻る" : "Back to Services"}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 text-vc-black dark:text-white leading-[1.1]">
              {t(service.title, lang)}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
              {t(service.detail!, lang)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-vc-black dark:text-white relative inline-block">
                  {lang === "vi" ? "Tổng quan giải pháp" : lang === "jp" ? "ソリューション概要" : "Solution Overview"}
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></span>
                </h2>
              </div>
              
              <div className="text-lg leading-[1.8] text-muted-foreground space-y-4">
                <p>
                  {lang === "vi" 
                    ? "VC GROUP thấu hiểu những khó khăn của khách hàng khi đối mặt với rác thải hay các vấn đề kỹ thuật tại nhà. Chúng tôi mang đến hệ thống giải pháp toàn diện, từ khâu tiếp nhận thông tin, khảo sát hiện trường đến triển khai thực tế."
                    : lang === "jp"
                    ? "VC GROUPは、不用品処分や技術的な課題に直面した際のお客様の負担を深く理解しています。情報の受付から現地調査、そして実際の作業まで、一貫したトータルソリューションを提供します。"
                    : "VC GROUP understands the challenges customers face with waste or technical issues at home. We provide a comprehensive system of solutions, from information intake and site survey to actual implementation."}
                </p>
                <p>
                  {lang === "vi" 
                    ? "Tiêu chuẩn Nhật Bản luôn được đặt lên hàng đầu trong mỗi bước thực hiện, đảm bảo sự an tâm tuyệt đối cho quý khách hàng."
                    : lang === "jp"
                    ? "すべての工程において、日本品質の基準を最優先にしており、お客様に絶対的な安心をお届けします。"
                    : "Japanese standards are prioritized in every step, ensuring absolute peace of mind for our customers."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                {(lang === "vi" ? ["Uy tín vượt trội", "Tận tâm hỗ trợ", "Giá cả minh bạch", "Chất lượng chuẩn Nhật"] 
                  : lang === "jp" ? ["卓越した信頼", "誠実なサポート", "透明な価格設定", "日本品質の施工"] 
                  : ["Superior Trust", "Dedicated Support", "Transparent Pricing", "Japanese Standard"]).map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-semibold">
                    <CheckCircle2 size={18} className="text-eco-green flex-shrink-0" />
                    <span className="text-sm md:text-base">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 group"
            >
              <img
                src={service.image}
                alt={t(service.title, lang)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Common USPs Section */}
      <section className="py-24 bg-vc-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-vc-black dark:text-white">
              {lang === "vi" ? "Vì sao nên chọn VC GROUP?" : lang === "jp" ? "VC GROUPが選ばれる理由" : "Why choose VC GROUP?"}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg">{lang === "vi" ? "Cam kết chất lượng chuẩn Nhật Bản trong từng dịch vụ" : lang === "jp" ? "すべてのサービスに日本品質のこだわりを" : "Commitment to Japanese quality in every service"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-background border border-border/50 rounded-3xl text-center space-y-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary shadow-inner">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-vc-black dark:text-white">{t(usp.title, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(usp.desc, lang)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Media Section */}
      {service.video && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold">
                  <PlayCircle size={24} />
                  <span className="uppercase tracking-[0.2em] text-xs font-black">{lang === "vi" ? "Quy trình thực tế" : lang === "jp" ? "実際の作業風景" : "Process Video"}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-vc-black dark:text-white leading-tight">
                 {lang === "vi" ? "Cùng theo dõi video giới thiệu" : lang === "jp" ? "紹介ビデオをご覧ください" : "Watch our introduction video"}
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-border/20 bg-vc-black aspect-video relative group"
              >
                <iframe
                  className="w-full h-full"
                  src={service.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden group">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 transition-transform duration-1000 group-hover:scale-110" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl md:text-6xl font-heading font-bold leading-[1.1] text-vc-black dark:text-white">
              {lang === "vi" 
                ? "Bắt đầu giải quyết nhanh chóng!" 
                : lang === "jp" 
                ? "今すぐ解決しませんか？" 
                : "Get it resolved today!"}
            </h2>
            <p className="text-xl md:text-2xl text-vc-black/80 dark:text-white/80 max-w-2xl mx-auto font-medium">
              {lang === "vi" 
                ? "Liên hệ để nhận báo giá miễn phí ngay trong 30 phút." 
                : lang === "jp" 
                ? "30分以内にお届けする無料見積もりを受付中です。" 
                : "Contact us for a free quote within 30 minutes."}
            </p>
            <div className="pt-4">
              <a href="/contact" className="px-12 py-6 bg-white dark:bg-vc-black text-primary dark:text-white font-black rounded-full text-xl hover:bg-vc-yellow hover:text-vc-black transition-all shadow-[0_15px_35px_rgba(0,0,0,0.1)] inline-block uppercase tracking-widest">
                 {lang === "vi" ? "Liên hệ ngay" : lang === "jp" ? "問い合わせる" : "Contact Now"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default ServiceDetailPage;
