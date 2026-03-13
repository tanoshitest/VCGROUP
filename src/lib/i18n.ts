export type Language = "jp" | "vi" | "en";

export const translations = {
  nav: {
    home: { jp: "ホーム", vi: "Trang chủ", en: "Home" },
    about: { jp: "会社概要", vi: "Về chúng tôi", en: "About Us" },
    services: { jp: "事業概要", vi: "Dịch vụ", en: "Services" },
    projects: { jp: "施工事例", vi: "Dự án", en: "Projects" },
    contact: { jp: "お問い合わせ", vi: "Liên hệ", en: "Contact" },
  },
  hero: {
    headline: {
      jp: "まだ使えるものを大切に\n不用品回収・リユース・環境に優しいサービス",
      vi: "Trân trọng những thứ còn sử dụng được\nThu gom đồ không dùng · Tái sử dụng · Dịch vụ thân thiện với môi trường",
      en: "Cherishing What Can Still Be Used\nJunk Removal · Reuse · Eco-Friendly Services",
    },
  },
  services: {
    title: { jp: "事業概要", vi: "Tổng quan dịch vụ", en: "Our Services" },
    items: [
      {
        title: { jp: "不用品回収", vi: "Thu gom đồ không dùng", en: "Junk Removal" },
        desc: {
          jp: "ご家庭やオフィスの不用品を迅速・丁寧に回収いたします。",
          vi: "Thu gom nhanh chóng và cẩn thận đồ không dùng từ gia đình và văn phòng.",
          en: "Quick and careful collection of unwanted items from homes and offices.",
        },
      },
      {
        title: { jp: "リユース・中古品販売", vi: "Bán đồ cũ", en: "Reuse & Secondhand Sales" },
        desc: {
          jp: "まだ使える品物をリユースし、中古品として販売しています。",
          vi: "Tái sử dụng và bán lại các sản phẩm còn dùng được.",
          en: "We reuse and resell items that still have value.",
        },
      },
      {
        title: { jp: "エアコン取付・取外し", vi: "Lắp / tháo điều hòa", en: "AC Installation & Removal" },
        desc: {
          jp: "エアコンの取り付け・取り外しを専門スタッフが対応します。",
          vi: "Đội ngũ chuyên nghiệp lắp đặt và tháo gỡ điều hòa.",
          en: "Professional staff handle air conditioner installation and removal.",
        },
      },
      {
        title: { jp: "産業廃棄物収集運搬", vi: "Thu gom & vận chuyển rác thải công nghiệp", en: "Industrial Waste Transport" },
        desc: {
          jp: "産業廃棄物の収集・運搬を法令に基づき適正に行います。",
          vi: "Thu gom và vận chuyển rác thải công nghiệp đúng quy định pháp luật.",
          en: "Lawful collection and transport of industrial waste.",
        },
      },
    ],
  },
  ceo: {
    title: { jp: "代表者のご挨拶", vi: "Lời chào từ Giám đốc", en: "CEO Greeting" },
    name: "PHAN DUY PHUONG (ファン　ズイ　フォン)",
    text: {
      jp: "VC GROUP株式会社のホームページをご覧いただき、誠にありがとうございます。日頃より弊社のサービスをご利用いただいているお客様に、心より感謝申し上げます。VC GROUPは、不用品回収や家電・家具のリユース・再利用サポートなどを通じて、お客様のご負担をできる限り軽減するサービスを提供しております。私たちは、「まだ使えるものを大切にする」という理念のもと、環境に配慮しながら、地域社会に貢献してまいります。",
      vi: "Cảm ơn quý khách đã ghé thăm trang web của VC GROUP株式会社. Chúng tôi xin gửi lời cảm ơn chân thành đến tất cả khách hàng đã và đang sử dụng dịch vụ của chúng tôi. VC GROUP cung cấp các dịch vụ thu gom đồ không dùng, tái sử dụng đồ gia dụng và nội thất, nhằm giảm bớt gánh nặng cho khách hàng. Với triết lý \"Trân trọng những thứ còn dùng được\", chúng tôi cam kết đóng góp cho cộng đồng địa phương trong khi bảo vệ môi trường.",
      en: "Thank you for visiting the VC GROUP website. We sincerely appreciate all customers who use our services. VC GROUP provides junk removal, appliance and furniture reuse support, and other services to reduce our customers' burden as much as possible. Under our philosophy of \"Cherishing what can still be used,\" we are committed to contributing to the local community while caring for the environment.",
    },
  },
  projects: {
    title: { jp: "施工事例", vi: "Dự Án của chúng tôi", en: "Our Projects" },
    viewMore: { jp: "もっと見る", vi: "Xem thêm", en: "View More" },
    items: [
      {
        id: "apartment-junk",
        title: { jp: "マンション不用品回収", vi: "Thu gom đồ chung cư", en: "Apartment Junk Removal" },
        before: { vi: "Đồ đạc cũ ngổn ngang tại căn hộ chung cư cao tầng.", jp: "高層マンションの不用品が散乱している状態。", en: "Cluttered furniture in a high-rise apartment." },
        after: { vi: "Không gian sạch sẽ, toàn bộ đồ đạc được vận chuyển an toàn qua thang máy.", jp: "エレベーターを利用して全ての不用品を安全に排出し、清掃が完了した状態。", en: "Clean space after safe removal via elevator." },
        reuseStory: { vi: "Các đồ nội thất gỗ còn tốt được chuyển đến xưởng tân trang để tái sử dụng.", jp: "状態の良い木製家具は工房でリペアされ、再利用されました。", en: "Quality wooden furniture was sent to a workshop for refurbishment and reuse." }
      },
      {
        id: "ac-installation",
        title: { jp: "エアコン取付工事", vi: "Lắp đặt điều hòa", en: "AC Installation" },
        before: { vi: "Khu vực tường trống chưa có hệ thống làm mát.", jp: "冷房設備がない空の状態の壁面。", en: "Empty wall without any cooling system." },
        after: { vi: "Hệ thống điều hòa công nghiệp vận hành ổn định, thẩm mỹ cao.", jp: "業務用エアコンが美しく設置され、安定稼働している状態。", en: "Industrial AC system installed professionally and running smoothly." },
        reuseStory: { vi: "Các linh kiện máy cũ được phân loại để tái chế linh kiện điện tử.", jp: "古い機材は電子部品のリサイクルとして再資源化されました。", en: "Old unit parts were sorted for electronic component recycling." }
      },
      {
        id: "furniture-reuse",
        title: { jp: "中古家具リユース", vi: "Tái sử dụng nội thất cũ", en: "Furniture Reuse" },
        before: { vi: "Sofa và bàn cũ bị bám bụi, chuẩn bị bỏ đi.", jp: "埃を被り、廃棄される予定だった古い家具。", en: "Dusty old sofa and table marked for disposal." },
        after: { vi: "Sản phẩm như mới sau khi được vệ sinh công nghiệp và bọc lại.", jp: "クリーニングと張り替えを経て、新品同様に蘇った家具。", en: "Furniture restored to like-new condition after professional cleaning." },
        reuseStory: { vi: "Tiết kiệm 80% chi phí cho khách hàng mới so với việc mua đồ mới.", jp: "新品購入と比較して、新しい持ち主のコストを80%削減しました。", en: "Saved 80% of costs for new owners compared to buying new." }
      },
      {
        id: "waste-transport",
        title: { jp: "産業廃棄物運搬", vi: "Vận chuyển rác thải", en: "Waste Transport" },
        before: { vi: "Rác thải công nghiệp tích tụ gây cản trở sản xuất tại nhà máy.", jp: "工場の生産ラインを妨げていた産業廃棄物の山。", en: "Industrial waste pile obstructing factory production." },
        after: { vi: "Mặt bằng thông thoáng, đạt tiêu chuẩn an toàn vệ sinh môi trường.", jp: "環境衛生基準をクリアし、生産スペースが確保された状態。", en: "Clear floor meeting environmental safety standards." },
        reuseStory: { vi: "Kim loại phế liệu được tách lọc hoàn toàn để đưa vào nhà máy luyện kim.", jp: "金属スクラップは全て分離され、製鉄所へと運ばれました。", en: "Scrap metals were fully separated and sent to smelting plants." }
      },
      {
        id: "office-cleanup",
        title: { jp: "Dọn dẹp văn phòng", vi: "Dọn dẹp văn phòng", en: "Office Cleanup" },
        before: { vi: "Văn phòng cũ nhiều giấy tờ và thiết bị điện tử hỏng.", jp: "古い書類や故障した電子機器が混在するオフィス。", en: "Office cluttered with old documents and broken electronics." },
        after: { vi: "Văn phòng trống sẵn sàng bàn giao cho chủ mới.", jp: "明け渡し準備が整った、何もない清らかな状態のオフィス。", en: "Empty office ready for handover to new tenants." },
        reuseStory: { vi: "Máy tính cũ được kiểm tra và tặng cho các trung tâm đào tạo từ thiện.", jp: "古いPCは検査を経て、教育支援団体へ寄付されました。", en: "Discarded PCs were tested and donated to educational charities." }
      },
      {
        id: "moving-disposal",
        title: { jp: "引越し不用品処分", vi: "Xử lý đồ khi chuyển nhà", en: "Moving Disposal" },
        before: { vi: "Giai đoạn hỗn loạn khi chuyển nhà với nhiều đồ bỏ lại.", jp: "引越し作業中の、不用品が混在する混乱した様子。", en: "Chaotic move-out scene with many items left behind." },
        after: { vi: "Toàn bộ rác thải được xử lý gọn gàng trong ngày.", jp: "全ての不用品が即日で片付けられ、スッキリした状態。", en: "All unwanted items cleared neatly within the same day." },
        reuseStory: { vi: "Giảm thiểu lượng rác thải ra môi trường qua việc phân loại kỹ.", jp: "徹底した分別により、最終的な埋め立てゴミを大幅に削減しました。", en: "Significantly reduced landfill waste through meticulous sorting." }
      },
    ],
  },
  whyUs: {
    title: { jp: "VC GROUPが選ばれる理由", vi: "Lý do chọn VC GROUP", en: "Why Choose VC GROUP" },
    items: [
      {
        title: { jp: "迅速対応", vi: "Phản hồi và xử lý nhanh chóng", en: "Rapid Response" },
        desc: {
          jp: "お問い合わせから最短即日対応。迅速なサービスを提供します。",
          vi: "Phản hồi trong ngày, dịch vụ nhanh chóng.",
          en: "Same-day response from inquiry. We provide fast service.",
        },
      },
      {
        title: { jp: "大型トラック対応", vi: "Có xe tải lớn – xử lý số lượng lớn", en: "Large Truck Capacity" },
        desc: {
          jp: "大型トラックで大量の不用品も一度に回収可能です。",
          vi: "Xe tải lớn có thể thu gom lượng lớn đồ một lần.",
          en: "Large trucks can collect a high volume of items at once.",
        },
      },
      {
        title: { jp: "安心・丁寧な作業", vi: "Làm việc cẩn thận và an toàn", en: "Safe & Careful Work" },
        desc: {
          jp: "経験豊富なスタッフが丁寧に作業いたします。",
          vi: "Nhân viên giàu kinh nghiệm làm việc cẩn thận.",
          en: "Experienced staff work carefully and safely.",
        },
      },
      {
        title: { jp: "リユース・環境配慮", vi: "Tái sử dụng và bảo vệ môi trường", en: "Reuse & Eco-Friendly" },
        desc: {
          jp: "リユース可能な品物は再利用し、環境に配慮した処理を行います。",
          vi: "Tái sử dụng đồ còn dùng được, xử lý thân thiện với môi trường.",
          en: "Reusable items are recycled; we process everything eco-consciously.",
        },
      },
    ],
  },
  process: {
    title: { jp: "ご利用の流れ", vi: "Quy trình sử dụng", en: "How It Works" },
    steps: [
      { title: { jp: "お問い合わせ", vi: "Liên hệ", en: "Contact Us" } },
      { title: { jp: "お見積り", vi: "Báo giá", en: "Get a Quote" } },
      { title: { jp: "回収作業", vi: "Thực hiện thu gom", en: "Collection" } },
      { title: { jp: "作業完了・お支払い", vi: "Hoàn thành và thanh toán", en: "Complete & Pay" } },
    ],
  },
  company: {
    title: { jp: "会社情報", vi: "Thông tin công ty", en: "Company Information" },
    name: "VC GROUP 株式会社",
    established: { label: { jp: "設立", vi: "Thành lập", en: "Established" }, value: "2020年12月28日" },
    capital: { label: { jp: "資本金", vi: "Vốn", en: "Capital" }, value: "２０００万円" },
    address: {
      label: { jp: "所在地", vi: "Địa chỉ", en: "Address" },
      value: "〒343-0837 埼玉県越谷市蒲生本町3-30",
    },
    phone: { label: { jp: "電話番号", vi: "Điện thoại", en: "Phone" }, value: "048-919-2962" },
    email: { label: { jp: "メール", vi: "Email", en: "Email" }, value: "info@vcgroup.jp" },
  },
  contact: {
    title: { jp: "お問い合わせ", vi: "Liên hệ", en: "Contact Us" },
    name: { jp: "お名前", vi: "Họ tên", en: "Name" },
    phone: { jp: "電話番号", vi: "Số điện thoại", en: "Phone" },
    email: { jp: "メールアドレス", vi: "Email", en: "Email" },
    service: { jp: "ご依頼内容", vi: "Nội dung yêu cầu", en: "Service Request" },
    privacy: {
      jp: "個人情報保護方針に同意します",
      vi: "Tôi đồng ý với chính sách bảo mật thông tin",
      en: "I agree to the Privacy Policy",
    },
    submit: { jp: "送信する", vi: "Gửi", en: "Submit" },
  },
  footer: {
    rights: "© 2025 VC GROUP 株式会社. All rights reserved.",
  },
};

export function t(obj: Record<Language, string>, lang: Language): string {
  return obj[lang] || obj.jp;
}
