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
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      {/* 1. Hero / Header Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{lang === "vi" ? "Quay lại danh sách dịch vụ" : lang === "jp" ? "サービス一覧に戻る" : "Back to Services"}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-vc-black dark:text-white leading-tight">
              {t(service.title, lang)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              {t(service.detail!, lang)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-vc-black relative inline-block">
                {lang === "vi" ? "Tổng quan giải pháp" : lang === "jp" ? "ソリューション概要" : "Solution Overview"}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
              </h2>
              <p className="text-lg leading-loose text-muted-foreground text-justify">
                {lang === "vi" 
                  ? "VC GROUP thấu hiểu những khó khăn của khách hàng khi đối mặt với rác thải hay các vấn đề kỹ thuật tại nhà. Chúng tôi mang đến hệ thống giải pháp toàn diện, từ khâu tiếp nhận thông tin, khảo sát hiện trường đến triển khai thực tế. Tiêu chuẩn Nhật Bản luôn được đặt lên hàng đầu trong mỗi bước thực hiện."
                  : lang === "jp"
                  ? "VC GROUPは、不用品処分や技術的な課題に直面した際のお客様の負担を深く理解しています。情報の受付から現地調査、そして実際の作業まで、一貫したトータルソリューションを提供します。すべての工程において、日本品質の基準を最優先にしています。"
                  : "VC GROUP understands the challenges customers face with waste or technical issues at home. We provide a comprehensive system of solutions, from information intake and site survey to actual implementation. Japanese standards are always prioritized in every step."}
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {lang === "vi" ? ["Uy tín", "Tận tâm", "Giá tốt"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-eco-green" />
                    <span>{tag}</span>
                  </div>
                )) : lang === "jp" ? ["信頼", "誠実", "適正価格"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-eco-green" />
                    <span>{tag}</span>
                  </div>
                )) : ["Reliable", "Dedicated", "Best Price"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-eco-green" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={service.image}
                alt={t(service.title, lang)}
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Common USPs Section */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {lang === "vi" ? "Tại sao chọn chúng tôi?" : lang === "jp" ? "私たちが選ばれる理由" : "Why Choose Us?"}
            </h2>
            <p className="text-muted-foreground">{lang === "vi" ? "Cam kết chất lượng chuẩn Nhật" : lang === "jp" ? "日本品質の確かな約束" : "Commitment to Japanese Quality"}</p>
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
                  className="p-8 bg-background border border-border rounded-2xl text-center space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{t(usp.title, lang)}</h3>
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
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold">
                <PlayCircle size={24} />
                <span className="uppercase tracking-widest text-sm">{lang === "vi" ? "Nghiệm thu thực tế" : lang === "jp" ? "実際の作業風景" : "Live Execution"}</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-12">
               {lang === "vi" ? "Video giới thiệu quy trình" : lang === "jp" ? "作業工程のご紹介" : "Process Overview Video"}
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-vc-black aspect-video relative"
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
        </section>
      )}

      {/* 5. CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              {lang === "vi" 
                ? "Dễ dàng giải quyết nhanh mọi vấn đề!" 
                : lang === "jp" 
                ? "お困りごとは、VC GROUPにお任せください！" 
                : "Resolve your issues with ease and speed!"}
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {lang === "vi" 
                ? "Báo giá nhanh chóng, tư vấn miễn phí 24/7. Chúng tôi luôn sẵn sàng hỗ trợ bạn." 
                : lang === "jp" 
                ? "迅速なお見積り、24時間365日の無料相談受付中。いつでもサポートいたします。" 
                : "Quick quotes, 24/7 free consultation. We are always ready to help."}
            </p>
            <div className="pt-4">
              <a href="/contact" className="px-10 py-5 bg-white text-primary font-bold rounded-full text-xl hover:bg-vc-yellow hover:text-vc-black transition-all shadow-xl inline-block uppercase tracking-wide">
                 {lang === "vi" ? "Liên hệ ngay" : lang === "jp" ? "今すぐ問い合わせる" : "Contact Now"}
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
