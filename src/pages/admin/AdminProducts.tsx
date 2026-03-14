import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Package,
  X,
  Image as ImageIcon,
  Tag
} from "lucide-react";
import { translations } from "@/lib/i18n";

const AdminProducts = () => {
  const products = translations.services.catalog.products;
  const categories = translations.services.catalog.categories;
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredProducts = products.filter(item => 
    item.title.vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground self-start sm:self-center">
           Quản lý Sản phẩm
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text" 
              placeholder="Tìm tên sản phẩm..."
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
            <span>Thêm sản phẩm</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-background border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all hover:shadow-xl shadow-sm"
          >
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
               <img 
                src={product.image} 
                alt={product.title.vi} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
               <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-vc-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase">
                    {product.category}
                  </span>
               </div>
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="p-3 bg-white text-vc-black rounded-xl hover:bg-vc-yellow transition-colors shadow-lg">
                    <Edit2 size={20} />
                  </button>
                  <button className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-50 transition-colors shadow-lg">
                    <Trash2 size={20} />
                  </button>
               </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-foreground text-sm line-clamp-1">{product.title.vi}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-red-600 font-bold text-base">{product.price}</span>
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-md font-medium">PK-{product.id}00</span>
              </div>
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
                <h3 className="text-xl font-bold">Đăng sản phẩm mới</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-muted rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold">Tên sản phẩm (Tiếng Việt)</label>
                    <input type="text" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ví dụ: Tủ lạnh Sharp 200L" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-bold">Phân loại</label>
                    <select className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20">
                       {categories.map(c => <option key={c.id} value={c.id}>{c.vi}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold">Giá bán (VNĐ hoặc Yên)</label>
                    <input type="text" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ví dụ: ￥5,000" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-bold">Tình trạng</label>
                    <input type="text" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" placeholder="Mới 90%, đã qua sử dụng..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold">Mô tả sản phẩm</label>
                  <textarea rows={4} className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Thông số kỹ thuật, bảo hành, ưu đãi mẫu..." />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold">Hình ảnh sản phẩm</label>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="aspect-square border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground gap-1 cursor-pointer hover:bg-muted/30 transition-all">
                        <Plus size={24} />
                        <span className="text-[10px]">Thêm ảnh</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-6 bg-muted/30 border-t border-border flex justify-end gap-3">
                <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-2.5 font-bold text-sm text-muted-foreground hover:text-foreground transition-colors">Hủy</button>
                <button className="px-8 py-2.5 bg-vc-black text-white rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-all active:scale-95">Đăng sản phẩm</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminProducts;
