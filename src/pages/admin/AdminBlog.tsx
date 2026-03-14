import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Eye,
  X,
  Image as ImageIcon
} from "lucide-react";
import { translations } from "@/lib/i18n";

const AdminBlog = () => {
  const blogItems = translations.blog.items;
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredBlogs = blogItems.filter(item => 
    item.title.vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.title.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground self-start sm:self-center">
           Quản lý Bài viết
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-vc-black text-white rounded-xl text-sm font-bold hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            <Plus size={18} />
            <span>Đăng bài mới</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredBlogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-background border border-border p-4 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:border-primary/50 transition-all hover:shadow-md"
          >
            <div className="w-full md:w-40 h-24 bg-muted rounded-xl overflow-hidden shrink-0 border border-border">
              <img src={blog.image} alt={blog.title.vi} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="flex-1 min-w-0 text-center md:text-left">
              <div className="text-xs text-muted-foreground mb-1 flex items-center justify-center md:justify-start gap-2">
                <span className="bg-muted px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Blog</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="font-bold text-foreground truncate">{blog.title.vi}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{blog.summary.vi}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
               <button className="p-2.5 text-muted-foreground hover:bg-muted rounded-xl transition-all" title="Xem bài viết">
                <Eye size={18} />
              </button>
              <button className="p-2.5 text-blue-500 hover:bg-blue-50 rounded-xl transition-all" title="Chỉnh sửa">
                <Edit2 size={18} />
              </button>
              <button className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Xóa bài">
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-border">
                <h3 className="text-xl font-bold">Thêm bài viết mới</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-muted rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold">Tiêu đề (Tiếng Việt)</label>
                    <input type="text" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" placeholder="Nhập tiêu đề..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Tiêu đề (Tiếng Nhật)</label>
                    <input type="text" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" placeholder="タイトルを入力..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold">Mô tả ngắn</label>
                  <textarea rows={2} className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Tóm tắt nội dung bài viết..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold">Nội dung chi tiết</label>
                  <textarea rows={6} className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Viết bài ở đây..." />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold">Ảnh bìa</label>
                   <div className="w-full h-40 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground gap-2 cursor-pointer hover:bg-muted/30 transition-all">
                      <ImageIcon size={32} strokeWidth={1.5} />
                      <span className="text-xs">Tải ảnh lên hoặc kéo thả vào đây</span>
                   </div>
                </div>
              </div>

              <div className="p-6 bg-muted/30 border-t border-border flex justify-end gap-3">
                <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-2.5 font-bold text-sm text-muted-foreground hover:text-foreground transition-colors">Hủy</button>
                <button className="px-8 py-2.5 bg-vc-black text-white rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-all active:scale-95">Lưu bài viết</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminBlog;
