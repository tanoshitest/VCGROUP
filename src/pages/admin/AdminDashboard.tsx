import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ShoppingBag, 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

const AdminDashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    const initialMockLeads = [
      { id: 1, name: "Nguyễn Văn A", phone: "0901234567", product: "Lò vi sóng Sharp", date: "10:30 Hôm nay", status: "Mới" },
      { id: 2, name: "Trần Thị B", phone: "0918765432", product: "Tủ lạnh Panasonic", date: "09:15 Hôm nay", status: "Đang xử lý" },
      { id: 3, name: "Lê Văn C", phone: "0988776655", product: "Máy giặt Toshiba", date: "Hôm qua", status: "Hoàn tất" },
    ];
    
    const savedLeads = JSON.parse(localStorage.getItem("vc_leads") || "[]").map((l: any) => ({
      ...l,
      name: l.name,
      status: "Mới" // Mapping "new" to "Mới" for the overview card
    })).slice(0, 5);

    setLeads([...savedLeads, ...initialMockLeads].slice(0, 3));
  }, []);

  const stats = [
    { label: "Tổng số Khách hàng", value: "128", icon: <Users size={20} />, color: "bg-blue-500", trend: "+12%" },
    { label: "Sản phẩm đang bán", value: "20", icon: <ShoppingBag size={20} />, color: "bg-green-500", trend: "0%" },
    { label: "Bài viết Blog", value: "9", icon: <FileText size={20} />, color: "bg-purple-500", trend: "+2" },
    { label: "Yêu cầu mới", value: "5", icon: <Clock size={20} />, color: "bg-orange-500", trend: "Mới" },
  ];

  const recentLeads = [
    { id: 1, name: "Nguyễn Văn A", phone: "0901234567", product: "Lò vi sóng Sharp", date: "10:30 Hôm nay", status: "Mới" },
    { id: 2, name: "Trần Thị B", phone: "0918765432", product: "Tủ lạnh Panasonic", date: "09:15 Hôm nay", status: "Đang xử lý" },
    { id: 3, name: "Lê Văn C", phone: "0988776655", product: "Máy giặt Toshiba", date: "Hôm qua", status: "Hoàn tất" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 ${stat.color} text-white rounded-xl shadow-lg shadow-current/10`}>
                {stat.icon}
              </div>
              <div className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} />
                {stat.trend}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-muted-foreground text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads Table */}
        <div className="lg:col-span-2 bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-lg">Yêu cầu liên hệ gần đây</h3>
            <button className="text-xs font-bold text-primary hover:underline">Xem tất cả</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/30 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Khách hàng</th>
                  <th className="px-6 py-4">Sản phẩm</th>
                  <th className="px-6 py-4">Thời gian</th>
                  <th className="px-6 py-4">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-muted/20 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{lead.product}</td>
                    <td className="px-6 py-4 text-xs text-muted-foreground">{lead.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                        lead.status === "Mới" ? "bg-orange-100 text-orange-600" :
                        lead.status === "Đang xử lý" ? "bg-blue-100 text-blue-600" :
                        "bg-green-100 text-green-600"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Activity/Status */}
        <div className="space-y-6">
          <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Trạng thái Hệ thống</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Bảo mật SSL</p>
                  <p className="text-xs text-muted-foreground">Đang hoạt động</p>
                </div>
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Sao lưu dữ liệu</p>
                  <p className="text-xs text-muted-foreground">Hoàn tất lúc 02:00 sáng</p>
                </div>
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Dung lượng bộ nhớ</p>
                  <p className="text-xs text-muted-foreground">Đã dùng 65%</p>
                </div>
                <AlertCircle size={16} className="text-yellow-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-vc-black text-white rounded-2xl p-6 shadow-lg overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2 text-vc-yellow">Thông báo Quản trị</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Chào mừng Phan Duy Phương trở lại! Hệ thống đã tự động cập nhật tỷ giá Yên Nhật sáng nay. Chúc bạn một ngày làm việc hiệu quả.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-vc-yellow/10 rounded-full -mr-12 -mt-12 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
