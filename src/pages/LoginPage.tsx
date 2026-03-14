import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User, ShieldCheck, ArrowLeft } from "lucide-react";
import { Language, translations, t } from "@/lib/i18n";

interface LoginPageProps {
  lang: Language;
}

const LoginPage = ({ lang }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Mock login logic
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        localStorage.setItem("isAdminAuthenticated", "true");
        navigate("/admin");
      } else {
        setError(lang === "vi" ? "Tên đăng nhập hoặc mật khẩu không chính xác." : "Invalid username or password.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="absolute top-8 left-8">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">{lang === "vi" ? "Quay lại trang chủ" : "Back to Home"}</span>
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-background border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 rotate-3">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              {lang === "vi" ? "Đăng nhập Quản trị" : "Admin Login"}
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              {lang === "vi" ? "Vui lòng đăng nhập để quản lý nội dung website" : "Please login to manage website content"}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User size={14} className="text-muted-foreground" />
                {lang === "vi" ? "Tên đăng nhập" : "Username"}
              </label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="admin"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Lock size={14} className="text-muted-foreground" />
                {lang === "vi" ? "Mật khẩu" : "Password"}
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-red-500 font-medium"
              >
                {error}
              </motion.p>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-vc-black hover:bg-black text-white rounded-lg font-bold transition-all flex items-center justify-center shadow-lg active:scale-[0.98] disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                lang === "vi" ? "Đăng nhập ngay" : "Login Now"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 VC GROUP. {lang === "vi" ? "Trang quản trị bảo mật." : "Secure administrator area."}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
