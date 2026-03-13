import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

interface BlogDetailPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const BlogDetailPage = ({ lang, setLang }: BlogDetailPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = translations.blog.items.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate("/blog")} className="btn-primary">
          Post not found. Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <PageBanner />
      
      <main className="section-padding">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>{lang === "vi" ? "Quay lại danh sách" : lang === "jp" ? "一覧に戻る" : "Back to list"}</span>
          </motion.button>

          <article>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="text-sm">VC GROUP Blog</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                {t(post.title, lang)}
              </h1>

              <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-border">
                <img
                  src={post.image}
                  alt={t(post.title, lang)}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed italic border-l-4 border-primary pl-6">
                  {t(post.summary, lang)}
                </p>
                <div className="whitespace-pre-wrap text-foreground/90 leading-loose text-lg">
                  {t(post.content, lang)}
                  {"\n\n"}
                  {lang === "vi" 
                    ? "Chúng tôi tin rằng mỗi bước nhỏ trong việc dọn dẹp và tái sử dụng đều đóng góp to lớn vào việc bảo vệ hành tinh xanh. Hãy đồng hành cùng VC GROUP trong hành trình ý nghĩa này."
                    : lang === "jp"
                    ? "私たちは、片付けやリユースにおける小さな一歩が、緑豊かな地球を守るための大きな貢献になると信じています。この意義深い旅に、ぜひVC GROUPと共に歩んでください。"
                    : "We believe that every small step in cleaning and reusing contributes greatly to protecting our green planet. Join VC GROUP on this meaningful journey."}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    VC
                  </div>
                  <div>
                    <div className="font-bold">VC GROUP Team</div>
                    <div className="text-xs text-muted-foreground">Environmental Experts</div>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Share2 size={24} className="text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          </article>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default BlogDetailPage;
