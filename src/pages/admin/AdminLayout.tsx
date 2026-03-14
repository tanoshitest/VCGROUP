import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  FileText, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  User
} from "lucide-react";
import { Language } from "@/lib/i18n";

interface AdminLayoutProps {
  lang: Language;
}

const AdminLayout = ({ lang }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAdminAuthenticated");
    if (authStatus !== "true") {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/");
  };

  const menuItems = [
    { 
      path: "/admin", 
      icon: <LayoutDashboard size={20} />, 
      label: lang === "vi" ? "Tổng quan" : "Dashboard" 
    },
    { 
      path: "/admin/blog", 
      icon: <FileText size={20} />, 
      label: lang === "vi" ? "Quản lý Blog" : "Blog Posts" 
    },
    { 
      path: "/admin/products", 
      icon: <ShoppingBag size={20} />, 
      label: lang === "vi" ? "Quản lý Sản phẩm" : "Products" 
    },
    { 
      path: "/admin/leads", 
      icon: <Users size={20} />, 
      label: lang === "vi" ? "Thông tin Khách hàng" : "Customer Leads" 
    },
    { 
      path: "/admin/settings", 
      icon: <Settings size={20} />, 
      label: lang === "vi" ? "Cấu hình Web" : "Site Settings" 
    },
  ];

  if (isAuthenticated === null) return null;

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative bg-vc-black text-white h-screen fixed md:sticky top-0 z-40 flex flex-col transition-all overflow-hidden hidden md:flex"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-bold text-xl tracking-tight"
              >
                VC <span className="text-vc-yellow">ADMIN</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? "bg-vc-yellow text-vc-black shadow-lg shadow-vc-yellow/20 font-bold" 
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className={`${isActive ? "" : "group-hover:scale-110 transition-transform"}`}>
                  {item.icon}
                </div>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isSidebarOpen && isActive && (
                  <motion.div layoutId="activeDot" className="ml-auto">
                    <ChevronRight size={14} />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all ${!isSidebarOpen && "justify-center"}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-sm font-medium">{lang === "vi" ? "Đăng xuất" : "Logout"}</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-background border-b border-border px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="md:hidden flex items-center gap-4">
             <div className="font-bold text-lg tracking-tight">
                VC <span className="text-vc-yellow">ADMIN</span>
              </div>
          </div>
          
          <div className="flex-1 hidden md:block">
            <h1 className="text-lg font-bold text-foreground">
              {menuItems.find(i => i.path === location.pathname)?.label || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-bold">Admin User</span>
              <span className="text-xs text-muted-foreground">phuong@vcgroup.jp</span>
            </div>
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center border border-border">
              <User size={20} className="text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
      
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-vc-black text-white h-16 border-t border-white/10 flex items-center justify-around px-2 z-50">
         {menuItems.map((item) => (
           <Link
             key={item.path}
             to={item.path}
             className={`flex flex-col items-center justify-center gap-1 min-w-[60px] ${
               location.pathname === item.path ? "text-vc-yellow" : "text-white/60"
             }`}
           >
             {item.icon}
             <span className="text-[10px] font-medium truncate w-full text-center">{item.label}</span>
           </Link>
         ))}
      </nav>
    </div>
  );
};

export default AdminLayout;
