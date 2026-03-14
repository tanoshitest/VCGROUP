import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Save, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Bell,
  Smartphone,
  Palette,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle
} from "lucide-react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "Cấu hình Chung", icon: <Globe size={18} /> },
    { id: "contact", label: "Thông tin Liên hệ", icon: <Phone size={18} /> },
    { id: "notification", label: "Thông báo", icon: <Bell size={18} /> },
    { id: "security", label: "Bảo mật", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Cài đặt Hệ thống</h2>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
          <Save size={18} />
          <span>Lưu tất cả thay đổi</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-64 shrink-0 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? "bg-vc-black text-white shadow-lg" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-background border border-border rounded-3xl p-6 md:p-8 shadow-sm">
          {activeTab === "general" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-border pb-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Tên Website</label>
                  <input type="text" defaultValue="VC GROUP" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Slogan Trang chủ</label>
                  <input type="text" defaultValue="Trân trọng những thứ còn sử dụng được" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold flex items-center gap-2">
                  <Palette size={18} className="text-primary" />
                  Giao diện công ty
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <div className="p-4 border border-border rounded-2xl flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-vc-black rounded-lg" />
                      <span className="text-xs font-medium">Màu chủ đạo 1</span>
                   </div>
                   <div className="p-4 border border-border rounded-2xl flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-vc-yellow rounded-lg" />
                      <span className="text-xs font-medium">Màu chủ đạo 2</span>
                   </div>
                   <div className="p-4 border border-border rounded-2xl flex flex-col items-center gap-2 text-muted-foreground">
                      <div className="w-10 h-10 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                        <Settings size={14} />
                      </div>
                      <span className="text-xs font-medium">Tùy chỉnh</span>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold border-l-4 border-primary pl-3">
                  <Smartphone size={18} />
                  Kênh Hotline & Hỗ trợ
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground ml-1">Số điện thoại 1</span>
                    <input type="text" defaultValue="048-919-2962" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground ml-1">Zalo / Line</span>
                    <input type="text" defaultValue=" Phan Duy Phương" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
              </div>

               <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold border-l-4 border-primary pl-3">
                  <Mail size={18} />
                  Email Hệ thống
                </div>
                <input type="email" defaultValue="info@vcgroup.jp" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold border-l-4 border-primary pl-3">
                  <MapPin size={18} />
                  Địa chỉ Trụ sở
                </div>
                <textarea rows={2} defaultValue="〒343-0837 埼玉県越谷市蒲生本町3-30" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20 resize-none" />
              </div>
            </motion.div>
          )}

          {activeTab === "notification" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h4 className="font-bold text-lg border-b border-border pb-2">Cấu hình Thông báo</h4>
                
                <div className="space-y-4">
                  {[
                    { title: "Yêu cầu mới từ khách hàng", desc: "Nhận email ngay khi có khách hàng để lại thông tin.", default: true },
                    { title: "Cập nhật hệ thống", desc: "Thông báo về các bản cập nhật và bảo trì định kỳ.", default: true },
                    { title: "Báo cáo tuần/tháng", desc: "Gửi báo cáo tổng hợp về email quản trị.", default: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl border border-border/50">
                      <div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted cursor-pointer transition-colors hover:bg-muted-foreground/20">
                        <div className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${item.default ? 'translate-x-6 bg-primary' : 'translate-x-1'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold">Email nhận thông báo chính</label>
                <div className="flex gap-2">
                  <input type="email" defaultValue="admin@vcgroup.jp" className="flex-1 p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                  <button className="px-4 py-2 bg-vc-black text-white rounded-xl text-xs font-bold">Xác minh</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h4 className="font-bold text-lg border-b border-border pb-2">Đổi mật khẩu</h4>
                <div className="grid grid-cols-1 gap-4">
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-muted-foreground ml-1">Mật khẩu hiện tại</label>
                      <div className="relative">
                        <input type="password" placeholder="••••••••" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-muted-foreground ml-1">Mật khẩu mới</label>
                        <input type="password" placeholder="••••••••" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-muted-foreground ml-1">Xác nhận mật khẩu mới</label>
                        <input type="password" placeholder="••••••••" className="w-full p-3 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                   </div>
                </div>
                <button className="px-6 py-2 bg-vc-black text-white rounded-xl text-sm font-bold shadow-md">Cập nhật mật khẩu</button>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
                <AlertTriangle className="text-orange-500 shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-orange-800">Bảo mật Hai lớp (2FA)</p>
                  <p className="text-xs text-orange-700 mt-1">
                    Tài khoản của bạn chưa được kích hoạt bảo mật 2 lớp. Hãy kích hoạt để bảo vệ dữ liệu tốt hơn.
                  </p>
                  <button className="mt-3 px-4 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold hover:bg-orange-600 transition-all">Kích hoạt ngay</button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg border-b border-border pb-2">Lịch sử đăng nhập</h4>
                <div className="space-y-3">
                  {[
                    { device: "MacBook Pro - TP.HCM", time: "Đang hoạt động", type: "Chrome" },
                    { device: "iPhone 15 - Hà Nội", time: "2 giờ trước", type: "Siri/Mobile" },
                  ].map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0">
                      <div className="flex items-center gap-3">
                        <Smartphone size={16} className="text-muted-foreground" />
                        <div>
                          <p className="font-medium">{session.device}</p>
                          <p className="text-[10px] text-muted-foreground">{session.type} • {session.time}</p>
                        </div>
                      </div>
                      <button className="text-xs text-red-500 hover:underline">Đăng xuất</button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
