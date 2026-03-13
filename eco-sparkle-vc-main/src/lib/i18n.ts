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
    title: { jp: "施工事例・実績", vi: "Dự án & Thành tựu", en: "Projects & Results" },
    viewMore: { jp: "もっと見る", vi: "Xem thêm", en: "View More" },
    items: [
      { jp: "マンション不用品回収", vi: "Thu gom đồ chung cư", en: "Apartment Junk Removal" },
      { jp: "エアコン取付工事", vi: "Lắp đặt điều hòa", en: "AC Installation" },
      { jp: "中古家具リユース", vi: "Tái sử dụng nội thất cũ", en: "Furniture Reuse" },
      { jp: "産業廃棄物運搬", vi: "Vận chuyển rác thải", en: "Waste Transport" },
      { jp: "オフィス片付け", vi: "Dọn dẹp văn phòng", en: "Office Cleanup" },
      { jp: "引越し不用品処分", vi: "Xử lý đồ khi chuyển nhà", en: "Moving Disposal" },
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
