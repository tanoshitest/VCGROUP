import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";

interface ContactPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ContactPage = ({ lang, setLang }: ContactPageProps) => {
  const c = translations.company;

  const contactCards = [
    {
      icon: Phone,
      label: t(c.phone.label, lang),
      value: c.phone.value,
      href: `tel:${c.phone.value}`,
    },
    {
      icon: Mail,
      label: t(c.email.label, lang),
      value: c.email.value,
      href: `mailto:${c.email.value}`,
    },
    {
      icon: MapPin,
      label: t(c.address.label, lang),
      value: c.address.value,
      href: undefined,
    },
    {
      icon: Clock,
      label: lang === "jp" ? "営業時間" : lang === "vi" ? "Giờ làm việc" : "Business Hours",
      value: lang === "jp" ? "月〜土 9:00 - 18:00" : lang === "vi" ? "Thứ 2 - Thứ 7: 9:00 - 18:00" : "Mon - Sat 9:00 - 18:00",
      href: undefined,
    },
  ];

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
            {t(translations.contact.title, lang)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            {lang === "jp"
              ? "お気軽にお問い合わせください。無料でお見積りいたします。"
              : lang === "vi"
              ? "Hãy liên hệ với chúng tôi. Báo giá miễn phí."
              : "Feel free to reach out. Free estimates available."}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const Wrapper = card.href ? "a" : "div";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                  <Wrapper
                    {...(card.href ? { href: card.href } : {})}
                    className="card-3d bg-card rounded-xl p-6 text-center block hover:ring-2 hover:ring-primary/30 transition-all h-full"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="text-vc-black" size={22} />
                    </div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {card.label}
                    </p>
                    <p className="font-body text-foreground font-medium text-sm">{card.value}</p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <ContactForm lang={lang} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg w-full h-[450px]"
            >
              <iframe
                title="VC GROUP Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.0!2d139.79!3d35.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Z-8546Jt6OKY-mcrOW4guiSsueUn-acrOeUujMtMzA!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
