import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  MessageSquare,
  X
} from "lucide-react";

interface Lead {
  id: number;
  name: string;
  phone: string;
  product: string;
  date: string;
  status: "new" | "processing" | "completed" | "cancelled";
  address: string;
  note: string;
}

const AdminLeads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  
  // Real-time loading from localStorage + Mock data for demo
  useEffect(() => {
    const loadLeads = () => {
      const initialMockLeads: Lead[] = [
        { 
          id: 1, 
          name: "Nguyễn Văn A", 
          phone: "0901234567", 
          product: "Lò vi sóng Sharp", 
          date: "2024-03-14 10:30", 
          status: "new",
          address: "123 Đường ABC, Quận 1, TP.HCM",
          note: "Gọi cho tôi vào buổi sáng nhé"
        },
        { 
          id: 2, 
          name: "Trần Thị B", 
          phone: "0918765432", 
          product: "Tủ lạnh Panasonic", 
          date: "2024-03-14 09:15", 
          status: "processing",
          address: "456 Đường XYZ, Hà Nội",
          note: "Cần giao gấp trong ngày mai"
        },
        { 
          id: 3, 
          name: "Lê Văn C", 
          phone: "0988776655", 
          product: "Máy giặt Toshiba", 
          date: "2024-03-13 16:45", 
          status: "completed",
          address: "789 Đường MNP, Đà Nẵng",
          note: ""
        },
      ];

      const savedLeads = JSON.parse(localStorage.getItem("vc_leads") || "[]");
      setLeads([...savedLeads, ...initialMockLeads]);
    };

    loadLeads();
  }, []);

  const updateLeadStatus = (id: number, newStatus: Lead["status"]) => {
    const updatedLeads = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updatedLeads);
    
    // Save to localStorage (only the non-mock ones ideally, but for demo we save all)
    // Filter out initial mock leads if we want to be clean, but here we just update state
    // and if it's a real lead from vc_leads, it would stay there.
    // Actually simplicity for demo:
    const realLeads = JSON.parse(localStorage.getItem("vc_leads") || "[]");
    const updatedRealLeads = realLeads.map((l: Lead) => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem("vc_leads", JSON.stringify(updatedRealLeads));
    
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.phone.includes(searchTerm) ||
    lead.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status: Lead["status"]) => {
    switch (status) {
      case "new": return "bg-orange-100 text-orange-600 border-orange-200";
      case "processing": return "bg-blue-100 text-blue-600 border-blue-200";
      case "completed": return "bg-green-100 text-green-600 border-green-200";
      case "cancelled": return "bg-red-100 text-red-600 border-red-200";
    }
  };

  const getStatusLabel = (status: Lead["status"]) => {
    switch (status) {
      case "new": return "Mới";
      case "processing": return "Đang xử lý";
      case "completed": return "Hoàn tất";
      case "cancelled": return "Đã hủy";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground self-start sm:self-center">
           Danh sách Yêu cầu
        </h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text" 
              placeholder="Tìm tên, số điện thoại..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <button className="p-2 border border-border rounded-xl hover:bg-muted transition-colors bg-background">
            <Filter size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/30 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <th className="px-6 py-4">Khách hàng</th>
                <th className="px-6 py-4">Sản phẩm / Yêu cầu</th>
                <th className="px-6 py-4">Địa chỉ & Ghi chú</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-muted/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">{lead.name}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                          <Phone size={10} />
                          {lead.phone}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                          <Calendar size={10} />
                          {lead.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-foreground">{lead.product}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <div className="flex items-start gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} className="mt-0.5 shrink-0" />
                        <span className="truncate">{lead.address}</span>
                      </div>
                      {lead.note && (
                        <div className="flex items-start gap-1 text-xs text-blue-500 mt-1">
                          <MessageSquare size={12} className="mt-0.5 shrink-0" />
                          <span className="italic truncate">{lead.note}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${getStatusStyle(lead.status)}`}>
                      {getStatusLabel(lead.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button 
                        onClick={() => setSelectedLead(lead)}
                        className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-all" 
                        title="Xem chi tiết"
                       >
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredLeads.length === 0 && (
          <div className="p-12 text-center">
             <Users className="mx-auto text-muted-foreground mb-4 opacity-20" size={64} />
             <p className="text-muted-foreground italic">Không tìm thấy yêu cầu nào phù hợp.</p>
          </div>
        )}

        <div className="p-4 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Hiển thị {filteredLeads.length} yêu cầu</span>
          <div className="flex items-center gap-2">
            <button disabled className="px-3 py-1 border border-border rounded bg-background opacity-50">Trước</button>
            <button disabled className="px-3 py-1 border border-border rounded bg-background opacity-50">Sau</button>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  Chi tiết Yêu cầu
                </h3>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="p-2 hover:bg-muted rounded-full text-muted-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Customer Info */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Khách hàng</label>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-xl font-bold">
                          {selectedLead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">{selectedLead.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone size={14} />
                            {selectedLead.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Địa chỉ</label>
                      <div className="flex items-start gap-2 p-4 bg-muted/30 rounded-2xl border border-border">
                        <MapPin size={16} className="text-primary mt-1 shrink-0" />
                        <p className="text-sm text-foreground leading-relaxed">{selectedLead.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Request Info */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Trạng thái hiện tại</label>
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold border uppercase tracking-wider ${getStatusStyle(selectedLead.status)}`}>
                        {getStatusLabel(selectedLead.status)}
                      </span>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Dịch vụ / Sản phẩm</label>
                      <p className="text-lg font-bold text-foreground border-l-4 border-primary pl-4 bg-primary/5 py-2 rounded-r-xl">
                        {selectedLead.product}
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Thời gian gửi</label>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar size={14} />
                        {selectedLead.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                {selectedLead.note && (
                  <div className="pt-6 border-t border-border">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block flex items-center gap-2">
                       <MessageSquare size={14} />
                       Ghi chú khách hàng
                    </label>
                    <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl">
                      <p className="text-sm text-blue-700 dark:text-blue-300 italic leading-[1.8]">
                        "{selectedLead.note}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Status Controls */}
                <div className="pt-8 border-t border-border">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Cập nhật trạng thái</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button 
                      onClick={() => updateLeadStatus(selectedLead.id, "new")}
                      className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${selectedLead.status === "new" ? "bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-500/20" : "bg-card hover:bg-orange-50 border-border hover:border-orange-200 text-muted-foreground"}`}
                    >
                      Mới
                    </button>
                    <button 
                      onClick={() => updateLeadStatus(selectedLead.id, "processing")}
                      className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${selectedLead.status === "processing" ? "bg-blue-500 text-white border-blue-600 shadow-lg shadow-blue-500/20" : "bg-card hover:bg-blue-50 border-border hover:border-blue-200 text-muted-foreground"}`}
                    >
                      Xử lý
                    </button>
                    <button 
                      onClick={() => updateLeadStatus(selectedLead.id, "completed")}
                      className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${selectedLead.status === "completed" ? "bg-green-500 text-white border-green-600 shadow-lg shadow-green-500/20" : "bg-card hover:bg-green-50 border-border hover:border-green-200 text-muted-foreground"}`}
                    >
                      Hoàn tất
                    </button>
                    <button 
                      onClick={() => updateLeadStatus(selectedLead.id, "cancelled")}
                      className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${selectedLead.status === "cancelled" ? "bg-red-500 text-white border-red-600 shadow-lg shadow-red-500/20" : "bg-card hover:bg-red-50 border-border hover:border-red-200 text-muted-foreground"}`}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 p-6 bg-muted/30 border-t border-border">
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="px-6 py-2.5 rounded-xl border border-border text-sm font-bold hover:bg-muted transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLeads;
