import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ShoppingBag, ArrowLeft, Filter, Search } from "lucide-react";

interface ProductCatalogPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const ProductCatalogPage = ({ lang, setLang }: ProductCatalogPageProps) => {
  const catalog = translations.services.catalog!;
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = catalog.products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = t(product.title, lang).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      <main className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {lang === "vi" ? "Danh mục đồ cũ" : lang === "jp" ? "中古品カタログ" : "Secondhand Catalog"}
              </h1>
              <p className="text-muted-foreground font-body">
                {lang === "vi" 
                  ? "Sản phẩm tuyển chọn từ Nhật Bản, chất lượng cao, giá tiết kiệm." 
                  : lang === "jp" 
                  ? "日本国内の厳選された高品質なリユース品をお手頃な価格で。" 
                  : "Handpicked high-quality reused items from Japan at saving prices."}
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder={lang === "vi" ? "Tìm sản phẩm..." : lang === "jp" ? "商品を検索..." : "Search products..."}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-6 gap-3 mb-12 scrollbar-hide no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === "all" ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {lang === "vi" ? "Tất cả" : lang === "jp" ? "すべて" : "All Items"}
            </button>
            {catalog.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {t(cat as any, lang)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                  onClick={() => navigate(`/reuse-catalog/${product.id}`)}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={t(product.title, lang)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop if fallback fails
                        target.src = "https://placehold.co/400x400/f8fafc/94a3b8?text=Image+Not+Available";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-vc-black text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                       {t(catalog.categories.find(c => c.id === product.category) as any, lang)}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-4 line-clamp-1">
                      {t(product.title, lang)}
                    </h3>
                    <button className="w-full py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                      <ShoppingBag size={18} />
                      {lang === "vi" ? "Liên hệ mua" : lang === "jp" ? "購入を相談" : "Inquire to Buy"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-muted-foreground mb-4">No products found matching your criteria.</div>
              <button 
                onClick={() => {setActiveCategory("all"); setSearchQuery("");}}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <ShoppingBag className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-heading font-bold mb-6">
                {lang === "vi" ? "Bạn muốn đặt mua số lượng lớn?" : lang === "jp" ? "まとまった注文をご検討ですか？" : "Looking for bulk orders?"}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                {lang === "vi" 
                    ? "Chúng tôi hỗ trợ thu gom và vận chuyển nguyên container cho các đối tác kinh doanh đồ cũ tại Việt Nam và các nước khác. Mọi thủ tục chứng từ đều được xử lý chuyên nghiệp." 
                    : lang === "jp" 
                    ? "日本の中古品をコンテナ単位で輸出するビジネスパートナーを募集しています。煩雑な輸出書類の手続きも、当社がプロフェッショナルに対応いたします。" 
                    : "We support bulk collection and container shipping for business partners dealing in secondhand goods globally. All documentation is handled professionally."}
            </p>
            <a href="/contact" className="btn-primary">
                {lang === "vi" ? "Liên hệ hợp tác" : lang === "jp" ? "提携の相談" : "Partnership Inquiry"}
            </a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default ProductCatalogPage;
