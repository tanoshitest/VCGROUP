import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";
import { toast } from "sonner";

interface ContactFormProps {
  lang: Language;
}

const ContactForm = ({ lang }: ContactFormProps) => {
  const c = translations.contact;
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error(t(c.privacy, lang));
      return;
    }
    toast.success(lang === "jp" ? "送信しました" : lang === "vi" ? "Đã gửi thành công" : "Message sent!");
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t(c.title, lang)}
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {[
            { name: "name", label: t(c.name, lang), type: "text" },
            { name: "phone", label: t(c.phone, lang), type: "tel" },
            { name: "email", label: t(c.email, lang), type: "email" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{field.label}</label>
              <input
                type={field.type}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:ring-2 focus:ring-ring outline-none transition-all"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-body font-medium text-foreground mb-1.5">
              {t(c.service, lang)}
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 accent-vc-yellow"
            />
            <span className="text-sm font-body text-muted-foreground">{t(c.privacy, lang)}</span>
          </label>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-2 text-base"
          >
            <Send size={18} />
            {t(c.submit, lang)}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
