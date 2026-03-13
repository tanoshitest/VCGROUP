import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, X } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";
import { toast } from "sonner";

interface ContactFormProps {
  lang: Language;
}

const services = [
  { key: "junk", jp: "不用品回収", vi: "Thu gom đồ không dùng", en: "Junk Removal" },
  { key: "reuse", jp: "リユース・中古品販売", vi: "Bán đồ cũ", en: "Reuse & Secondhand Sales" },
  { key: "ac", jp: "エアコン取付・取外し", vi: "Lắp / tháo điều hòa", en: "AC Installation & Removal" },
  { key: "industrial", jp: "産業廃棄物収集運搬", vi: "Thu gom rác thải công nghiệp", en: "Industrial Waste Transport" },
];

const ContactForm = ({ lang }: ContactFormProps) => {
  const c = translations.contact;
  const [agreed, setAgreed] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const toggleService = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 5 - images.length);
      setImages((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error(t(c.privacy, lang));
      return;
    }
    toast.success(lang === "jp" ? "送信しました" : lang === "vi" ? "Đã gửi thành công" : "Message sent!");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-5 w-full"
    >
      {/* Name, Phone, Email – 2 column on md */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "name", label: t(c.name, lang), type: "text" },
          { name: "phone", label: t(c.phone, lang), type: "tel" },
          { name: "email", label: t(c.email, lang), type: "email", span: true },
          {
            name: "address",
            label: lang === "jp" ? "ご住所" : lang === "vi" ? "Địa chỉ" : "Address",
            type: "text",
            span: true,
          },
        ].map((field) => (
          <div key={field.name} className={field.span ? "md:col-span-2" : ""}>
            <label className="block text-sm font-body font-medium text-foreground mb-1.5">{field.label}</label>
            <input
              type={field.type}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:ring-2 focus:ring-ring outline-none transition-all"
            />
          </div>
        ))}
      </div>

      {/* Service selection */}
      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-2">
          {t(c.service, lang)}
        </label>
        <div className="grid grid-cols-2 gap-3">
          {services.map((svc) => {
            const active = selectedServices.includes(svc.key);
            return (
              <button
                key={svc.key}
                type="button"
                onClick={() => toggleService(svc.key)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-body font-medium transition-all text-left ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "border-input bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <span className={`w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center text-xs ${active ? "bg-white/30 border-white/50" : "border-muted-foreground"}`}>
                  {active && "✓"}
                </span>
                {svc[lang] ?? svc.jp}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-1.5">
          {lang === "jp" ? "ご連絡内容" : lang === "vi" ? "Nội dung yêu cầu" : "Message"}
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none"
        />
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-1.5">
          {lang === "jp" ? "画像添付（最大5枚）" : lang === "vi" ? "Đính kèm ảnh (tối đa 5 ảnh)" : "Attach photos (max 5)"}
        </label>
        <label className="flex flex-col items-center justify-center gap-2 w-full py-5 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-all">
          <Upload className="text-primary" size={26} />
          <span className="text-sm font-body text-muted-foreground">
            {lang === "jp" ? "クリックして画像を選択" : lang === "vi" ? "Nhấp để chọn ảnh" : "Click to select photos"}
          </span>
          <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageChange} />
        </label>
        {images.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {images.map((file, idx) => (
              <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border">
                <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-0.5 right-0.5 bg-black/60 rounded-full p-0.5 text-white"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Privacy & Submit */}
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
  );
};

export default ContactForm;
