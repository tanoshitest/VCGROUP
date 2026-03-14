import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowLeft, X, Send } from "lucide-react";

interface ProductDetailPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ProductDetailPage = ({ lang, setLang }: ProductDetailPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const catalog = translations.services.catalog;
  
  const product = catalog?.products.find(p => p.id.toString() === id);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (product) {
      const newLead = {
        id: Date.now(),
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        product: t(product.title, lang),
        note: formData.note,
        date: new Date().toLocaleString(),
        status: "new",
        source: "Product Order"
      };

      const existingLeads = JSON.parse(localStorage.getItem("vc_leads") || "[]");
      localStorage.setItem("vc_leads", JSON.stringify([newLead, ...existingLeads]));
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSuccess(false);
      setFormData({ name: "", phone: "", address: "", note: "" });
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <button onClick={() => navigate("/reuse-catalog")} className="btn-primary">
          Return to Catalog
        </button>
      </div>
    );
  }

  const categoryLabel = catalog?.categories.find(c => c.id === product.category);
  
  // Mocking a gallery since the data only has one image
  const gallery = [product.image, product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />

      <main className="flex-1 section-padding">
        <div className="container mx-auto px-4 max-w-6xl">
          <button
            onClick={() => navigate("/reuse-catalog")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {lang === "vi" ? "Quay lại danh sách" : lang === "jp" ? "一覧に戻る" : "Back to catalog"}
            </span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
            {/* Image Section */}
            <div className="w-full lg:w-[55%]">
              <div className="bg-muted rounded-lg relative aspect-[4/3] overflow-hidden mb-4 border border-border">
                <img
                  src={gallery[selectedIndex]}
                  alt={t(product.title, lang)}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/800x600/f8fafc/94a3b8?text=Image+Not+Available";
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${selectedIndex === idx ? 'border-red-600' : 'border-transparent hover:border-border opacity-70 hover:opacity-100'}`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/200x150/f8fafc/94a3b8?text=Image";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <div className="mb-6">
                <div className="text-xs text-yellow-500 font-bold uppercase tracking-wider mb-2">
                  {categoryLabel ? t(categoryLabel as any, lang) : product.category}
                </div>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                  {t(product.title, lang)}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {categoryLabel && (
                    <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {t(categoryLabel as any, lang)}
                    </span>
                  )}
                  <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {lang === "vi" ? "Sắp hết" : lang === "jp" ? "残りわずか" : "Almost Sold Out"}
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-red-600 mb-8 flex items-baseline gap-2">
                {product.price}
                <span className="text-sm text-muted-foreground font-normal">
                  {lang === "vi" ? "(Giá bán)" : lang === "jp" ? "(販売価格)" : "(Selling Price)"}
                </span>
              </div>

              <div className="space-y-0 mb-8">
                {product.condition && (
                  <div className="flex justify-between items-center py-4 border-b border-border">
                    <span className="text-muted-foreground text-sm">
                      {lang === "vi" ? "Tình trạng" : lang === "jp" ? "状態" : "Condition"}
                    </span>
                    <span className="font-medium text-sm text-foreground">
                      {t(product.condition, lang)}
                    </span>
                  </div>
                )}
                
                {product.warranty && (
                  <div className="flex justify-between items-center py-4 border-b border-border">
                    <span className="text-muted-foreground text-sm">
                      {lang === "vi" ? "Bảo hành" : lang === "jp" ? "保証" : "Warranty"}
                    </span>
                    <span className="font-medium text-sm text-foreground">
                      {t(product.warranty, lang)}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-muted-foreground text-sm">
                    {lang === "vi" ? "Kho" : lang === "jp" ? "在庫" : "Stock"}
                  </span>
                  <span className="font-medium text-sm text-red-500">
                    {lang === "vi" ? "Sắp hết" : lang === "jp" ? "残りわずか" : "Low"}
                  </span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-foreground mb-3">
                  {lang === "vi" ? "Mô tả sản phẩm" : lang === "jp" ? "商品説明" : "Product Description"}
                </h3>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    {lang === "vi" ? "Sản phẩm được đội ngũ kỹ thuật của VC GROUP tuyển chọn kỹ lưỡng, kiểm tra và vệ sinh theo tiêu chuẩn Nhật Bản khắt khe trước khi giao đến tay khách hàng. Chúng tôi cam kết chất lượng hoạt động bền bỉ, giúp bạn tiết kiệm chi phí mà vẫn đáp ứng hoàn hảo nhu cầu sử dụng hàng ngày." 
                    : lang === "jp" ? "お客様にお届けする前に、VC GROUPの技術チームが日本の厳格な基準で製品を厳選し、検査・クリーニングを行っております。コストを抑えながらも、日常の使用ニーズを完全に満たす、耐久性の高い品質をお約束します。"
                    : "Carefully selected, inspected, and cleaned to strict Japanese standards by VC GROUP's technical team before delivery. We guarantee durable performance, saving you money while perfectly meeting your daily needs."}
                  </p>
                  <p>
                    {lang === "vi" ? "Kiểm tra chất lượng 3 bước nghiêm ngặt. Vệ sinh và diệt khuẩn 100% bằng công nghệ cao. Đóng gói cẩn thận chống sốc khi vận chuyển. Hoan nghênh khách hàng đến xem trực tiếp."
                    : lang === "jp" ? "厳格な3段階品質チェック済み。ハイテクによる100%クリーニングと除菌。輸送時の衝撃を防ぐ丁寧な梱包。直接のご来店も大歓迎です。"
                    : "Rigorous 3-step quality assurance. 100% cleaned and sanitized using high-tech methods. Carefully packed with shockproof materials for shipping. In-person viewing welcome."}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-[#e60000] hover:bg-[#cc0000] text-white rounded-md transition-all flex items-center justify-center font-bold text-base shadow-sm hover:shadow-md"
                >
                  {lang === "vi" ? "Liên hệ mua hàng" : lang === "jp" ? "お問い合わせ" : "Contact to Buy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-background w-full max-w-md rounded-2xl shadow-xl overflow-hidden relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2 pr-6">
                  {lang === "vi" ? "Thông tin liên hệ" : lang === "jp" ? "お問い合わせ情報" : "Contact Information"}
                </h2>
                <div className="text-sm font-medium text-[#e60000] mb-4">
                  {t(product.title, lang)} - {product.price}
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {lang === "vi" ? "Vui lòng điền thông tin để chúng tôi hỗ trợ bạn mua sản phẩm này." : lang === "jp" ? "この商品を購入するために、以下のフォームに記入してください。" : "Please fill in your details so we can assist with your purchase."}
                </p>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <Send size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">
                      {lang === "vi" ? "Gửi thành công!" : lang === "jp" ? "送信成功！" : "Sent successfully!"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {lang === "vi" ? "Chúng tôi sẽ sớm liên hệ với bạn." : lang === "jp" ? "できるだけ早くご連絡いたします。" : "We will contact you shortly."}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {lang === "vi" ? "Họ và tên *" : lang === "jp" ? "氏名 *" : "Full Name *"}
                      </label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-[#e60000]/50 outline-none transition-all placeholder:text-muted-foreground/60 text-sm"
                        placeholder={lang === "vi" ? "Nhập họ và tên" : "Enter name"}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {lang === "vi" ? "Số điện thoại *" : lang === "jp" ? "電話番号 *" : "Phone Number *"}
                      </label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-[#e60000]/50 outline-none transition-all placeholder:text-muted-foreground/60 text-sm"
                        placeholder={lang === "vi" ? "Nhập số điện thoại" : "Enter phone"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {lang === "vi" ? "Địa chỉ nhận hàng" : lang === "jp" ? "お届け先住所" : "Delivery Address"}
                      </label>
                      <input 
                        type="text" 
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-[#e60000]/50 outline-none transition-all placeholder:text-muted-foreground/60 text-sm"
                        placeholder={lang === "vi" ? "Nhập địa chỉ của bạn" : "Enter your address"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {lang === "vi" ? "Ghi chú thêm" : lang === "jp" ? "備考" : "Additional Notes"}
                      </label>
                      <textarea 
                        rows={3}
                        value={formData.note}
                        onChange={e => setFormData({...formData, note: e.target.value})}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-[#e60000]/50 outline-none transition-all resize-none placeholder:text-muted-foreground/60 text-sm"
                        placeholder={lang === "vi" ? "Ví dụ: Gọi cho tôi vào buổi sáng..." : "Any special requests..."}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 mt-2 bg-[#e60000] hover:bg-[#cc0000] text-white rounded-lg transition-all font-bold text-base shadow-sm"
                    >
                      {lang === "vi" ? "Gửi thông tin đặt hàng" : lang === "jp" ? "注文情報を送信する" : "Submit Order Information"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer lang={lang} />
    </div>
  );
};

export default ProductDetailPage;
