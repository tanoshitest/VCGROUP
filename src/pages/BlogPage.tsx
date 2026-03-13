import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const BlogPage = ({ lang, setLang }: BlogPageProps) => {
  const navigate = useNavigate();
  const blog = translations.blog;

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      <main className="section-padding">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            {t(blog.title, lang)}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.items.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col group cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.title, lang)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-heading font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {t(post.title, lang)}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {t(post.summary, lang)}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                    <span>{lang === "vi" ? "Đọc tiếp" : lang === "jp" ? "続きを読む" : "Read more"}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default BlogPage;
