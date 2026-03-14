import { motion } from "framer-motion";
import { Trash2, Recycle, Wind, Factory, CheckCircle, ArrowRight } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import PageBanner from "@/components/PageBanner";

interface ServicesPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const icons = [Trash2, Recycle, Wind, Factory];

const serviceDetails = [
  {
    features: {
      jp: ["ご家庭の不用品を迅速回収", "オフィスの大量処分にも対応", "分別不要でお手軽", "即日対応可能"],
      vi: ["Thu gom nhanh đồ gia đình", "Xử lý số lượng lớn từ văn phòng", "Không cần phân loại", "Có thể xử lý trong ngày"],
      en: ["Quick home junk pickup", "Office bulk disposal support", "No sorting required", "Same-day service available"],
    },
  },
  {
    features: {
      jp: ["まだ使える品物を再販売", "家電・家具のリユース", "環境に優しいエコ活動", "買取査定も対応"],
      vi: ["Bán lại đồ còn dùng được", "Tái sử dụng đồ gia dụng & nội thất", "Hoạt động thân thiện với môi trường", "Hỗ trợ định giá thu mua"],
      en: ["Resell usable items", "Appliance & furniture reuse", "Eco-friendly practices", "Buy-back appraisals available"],
    },
  },
  {
    features: {
      jp: ["取り付け工事対応", "取り外し・移設もOK", "専門スタッフが丁寧に作業", "各メーカー対応可能"],
      vi: ["Lắp đặt điều hòa", "Tháo gỡ & di chuyển", "Nhân viên chuyên nghiệp", "Hỗ trợ nhiều hãng"],
      en: ["Installation service", "Removal & relocation", "Professional staff", "All major brands supported"],
    },
  },
  {
    features: {
      jp: ["法令遵守の適正処理", "マニフェスト管理徹底", "大型車両で効率運搬", "定期回収プランあり"],
      vi: ["Xử lý đúng quy định pháp luật", "Quản lý chứng từ chặt chẽ", "Vận chuyển hiệu quả bằng xe lớn", "Có gói thu gom định kỳ"],
      en: ["Legally compliant processing", "Thorough manifest management", "Efficient transport with large vehicles", "Regular collection plans available"],
    },
  },
];

const ServicesPage = ({ lang, setLang }: ServicesPageProps) => {
  const { title, items } = translations.services;

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />

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
              ? "VC GROUPは幅広いサービスでお客様のニーズにお応えします。"
              : lang === "vi"
              ? "VC GROUP đáp ứng mọi nhu cầu của khách hàng với nhiều dịch vụ đa dạng."
              : "VC GROUP meets all customer needs with a wide range of services."}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto space-y-16">
          {items.map((item, i) => {
            const Icon = icons[i];
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 max-w-5xl mx-auto relative bg-card p-8 rounded-2xl shadow-sm border border-border`}
              >
                {/* Mascot Image positioned at the bottom corner depending on layout */}
                <div className={`absolute bottom-0 ${isEven ? 'right-0 md:right-4' : 'left-0 md:left-4'} h-48 md:h-[105%] opacity-90 pointer-events-none z-0`}>
                   <img src="/assets/mascot.png" alt="VC Group Mascot" className={`w-auto h-full object-contain object-bottom drop-shadow-2xl ${!isEven ? 'scale-x-[-1]' : ''}`} />
                </div>

                <div className="flex-shrink-0 z-10 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-32 h-32 rounded-2xl bg-primary/20 flex items-center justify-center shadow-lg">
                    <Icon className="text-vc-black" size={56} />
                  </div>
                </div>
                <div className={`flex-1 z-10 relative pb-16 md:pb-0 ${isEven ? 'pr-20 md:pr-48 lg:pr-72' : 'pl-20 md:pl-48 lg:pl-72'}`}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {t(item.title, lang)}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {t(item.desc, lang)}
                  </p>
                  <ul className="space-y-3">
                    {serviceDetails[i].features[lang].map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 font-body text-foreground">
                        <CheckCircle className="text-eco-green flex-shrink-0" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8"
                  >
                    <a 
                      href={item.id === "reuse-sales" ? "/reuse-catalog" : `/services/${item.id}`} 
                      className="btn-outline inline-flex items-center gap-2 group bg-background"
                    >
                      {lang === "vi" ? "Xem thêm" : lang === "jp" ? "もっと見る" : "See more"}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Process lang={lang} />

      <section className="section-padding bg-vc-black text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">
            {lang === "jp" ? "お気軽にご相談ください" : lang === "vi" ? "Hãy liên hệ với chúng tôi" : "Feel free to contact us"}
          </h2>
          <p className="text-accent-foreground/70 font-body mb-8">
            {lang === "jp"
              ? "無料でお見積りいたします。まずはお問い合わせください。"
              : lang === "vi"
              ? "Báo giá miễn phí. Hãy liên hệ ngay."
              : "Free estimates available. Contact us today."}
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
            {t(translations.nav.contact, lang)}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default ServicesPage;
