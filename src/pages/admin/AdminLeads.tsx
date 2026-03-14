import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  MessageSquare
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
  
  // Real-time loading from localStorage + Mock data for demo
  useEffect(() => {
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
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.phone.includes(searchTerm) ||
    lead.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status: Lead["status"]) => {
    switch (status) {
      case "new": return "bg-orange-100 text-orange-600";
      case "processing": return "bg-blue-100 text-blue-600";
      case "completed": return "bg-green-100 text-green-600";
      case "cancelled": return "bg-red-100 text-red-600";
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
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusStyle(lead.status)}`}>
                      {getStatusLabel(lead.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-all" title="Xem chi tiết">
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
    </div>
  );
};

export default AdminLeads;
