export type Language = "jp" | "vi" | "en";

export const translations = {
  nav: {
    home: { jp: "ホーム", vi: "Trang chủ", en: "Home" },
    about: { jp: "会社概要", vi: "Về chúng tôi", en: "About Us" },
    services: { jp: "事業概要", vi: "Dịch vụ", en: "Services" },
    projects: { jp: "施工事例", vi: "Dự án", en: "Projects" },
    contact: { jp: "お問い合わせ", vi: "Liên hệ", en: "Contact" },
    blog: { jp: "ブログ", vi: "Blog", en: "Blog" },
  },
  hero: {
    headline: {
      jp: "まだ使えるものを大切に\n不用品回収・リユース・環境に優しいサービス",
      vi: "Trân trọng những thứ còn sử dụng được\nThu gom đồ không dùng · Tái sử dụng · Dịch vụ thân thiện với môi trường",
      en: "Cherishing What Can Still Be Used\nJunk Removal · Reuse · Eco-Friendly Services",
    },
  },
  blog: {
    title: { jp: "ブログ", vi: "Blog", en: "Blog" },
    items: [
      {
        id: "eco-lifestyle-2024",
        title: { jp: "2024年のエコライフ：不用品を減らす5つのコツ", vi: "Sống xanh 2024: 5 mẹo cắt giảm đồ dùng thừa", en: "Eco-Living 2024: 5 Tips to Reduce Waste" },
        summary: { jp: "持続可能な生活を始めるための簡単な習慣をご紹介します。", vi: "Những thói quen đơn giản để bắt đầu cuộc sống bền vững.", en: "Simple habits to start a sustainable life." },
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Sống xanh không khó như bạn nghĩ. Hãy bắt đầu bằng việc từ chối đồ nhựa dùng một lần và tái sử dụng những món đồ cũ trong nhà...",
          jp: "エコライフは決して難しいことではありません。まずは使い捨てプラスチックを断り、家庭内の古いものを再利用することから始めましょう...",
          en: "Living green is not as hard as you think. Start by refusing single-use plastics and reusing old items around your home..."
        }
      },
      {
        id: "junk-removal-guide",
        title: { jp: "不用品回収の完全ガイド：スムーズな処分のために", vi: "Hướng dẫn thu gom đồ cũ: Để dẹp nhà thật gọn", en: "Junk Removal Guide: For a Smooth Disposal" },
        summary: { jp: "効率的な仕分けと処分のプロのアドバイスをまとめました。", vi: "Lời khuyên chuyên nghiệp về cách phân loại và xử lý đồ hiệu quả.", en: "Professional advice on efficient sorting and disposal." },
        date: "2024-03-05",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Khi đối mặt với một núi đồ cũ, quy trình 3 bước 'Giữ - Tặng - Bỏ' sẽ giúp bạn tiết kiệm thời gian đáng kể...",
          jp: "山のような不用品を前にしたとき、「残す・譲る・捨てる」の3ステップが作業時間を大幅に短縮します...",
          en: "When facing a mountain of junk, the 3-step 'Keep - Donate - Toss' process will save you significant time..."
        }
      },
      {
        id: "reuse-furniture-ideas",
        title: { jp: "古い家具が見違える！DIYリユースアイデア集", vi: "Nội thất cũ lột xác! Ý tưởng tái sử dụng DIY", en: "Revive Old Furniture! DIY Reuse Ideas" },
        summary: { jp: "捨ててしまう前に試したい、家具のアップサイクル術をご紹介。", vi: "Những cách làm mới nội thất độc đáo trước khi bạn định vứt bỏ chúng.", en: "Unique upcycling tricks to try before you toss your furniture." },
        date: "2024-02-28",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Một lớp sơn mới hoặc thay đổi tay cầm có thể biến chiếc tủ cũ kỹ thành điểm nhấn nghệ thuật trong phòng khách...",
          jp: "新しいペンキを塗ったり、取っ手を変えたりするだけで、古いタンスがリビングの芸術的なアクセントに変わります...",
          en: "A fresh coat of paint or changing the handles can turn an old cabinet into an artistic centerpiece in your living room..."
        }
      },
      {
        id: "spring-cleaning-2024",
        title: { jp: "春の大掃除大作戦：心も部屋もリフレッシュ", vi: "Đại chiến dọn nhà mùa xuân: Làm mới không gian", en: "Spring Cleaning Strategy: Refresh Your Mind" },
        summary: { jp: "新しい季節を迎えるための、計画的な掃除の進め方。", vi: "Cách lên kế hoạch dọn dẹp để đón chào mùa mới tràn đầy năng lượng.", en: "How to plan your cleaning to welcome the new season with energy." },
        date: "2024-02-20",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Dọn dẹp không chỉ là làm sạch không gian mà còn là liệu pháp giúp tinh thần minh mẫn hơn...",
          jp: "掃除はただ空間を綺麗にするだけでなく、精神をリフレッシュさせるセラピーでもあります...",
          en: "Cleaning is not just about making space; it's also a therapy to clear your mind..."
        }
      },
      {
        id: "ac-maintenance-tips",
        title: { jp: "エアコンを長持ちさせるための日常のメンテナンス", vi: "Mẹo bảo dưỡng điều hòa: Dùng bền và tiết kiệm", en: "AC Maintenance Tips: Longevity and Savings" },
        summary: { jp: "専門業者を呼ぶ前にできる、簡単なフィルター掃除術。", vi: "Cách vệ sinh lưới lọc đơn giản trước khi gọi thợ chuyên môn.", en: "Simple filter cleaning tricks you can do before calling a pro." },
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Vệ sinh lưới lọc hàng tháng không chỉ giúp máy chạy êm mà còn tiết kiệm đến 15% điện năng tiêu thụ...",
          jp: "毎月のフィルター掃除は、動作をスムーズにするだけでなく、電気代を最大15%節約できます...",
          en: "Monthly filter cleaning not only makes the machine run smoothly but also saves up to 15% on energy..."
        }
      },
      {
        id: "industrial-waste-laws",
        title: { jp: "産業廃棄物管理の基本：企業が守るべき法令とは", vi: "Cơ bản về quản lý rác thải: Quy định cho doanh nghiệp", en: "Industrial Waste Basics: Laws for Businesses" },
        summary: { jp: "環境保護とコンプライアンスのための重要ポイントを解説。", vi: "Giải thích các điểm quan trọng về bảo vệ môi trường và tuân thủ pháp luật.", en: "Explaining key points for environmental protection and compliance." },
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Quản lý rác thải công nghiệp đòi hỏi sự am hiểu về các chứng từ vận chuyển và quy trình xử lý an toàn...",
          jp: "産業廃棄物の管理には、運搬証明書や安全な処理工程に関する知識が不可欠です...",
          en: "Industrial waste management requires understanding of transport manifests and safe processing procedures..."
        }
      },
      {
        id: "circular-economy-future",
        title: { jp: "循環型社会（サーキュラーエコノミー）の未来", vi: "Tương lai của kinh tế tuần hoàn: Xu hướng tất yếu", en: "Future of Circular Economy: Inevitable Trend" },
        summary: { jp: "リユースとリサイクルが変える、これからの経済モデル。", vi: "Mô hình kinh tế mới thay đổi nhờ tái sử dụng và tái chế.", en: "New economic models changing through reuse and recycling." },
        date: "2024-01-25",
        image: "https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Kinh tế tuần hoàn không chỉ bảo vệ tài nguyên mà còn tạo ra những cơ hội kinh doanh mới đầy tiềm năng...",
          jp: "循環型社会は資源を守るだけでなく、新たなビジネスチャンスを生み出す可能性を秘めています...",
          en: "Circular economy not only saves resources but also creates potential new business opportunities..."
        }
      },
      {
        id: "decluttering-psychology",
        title: { jp: "断捨離の心理学：物を手放して自由になる方法", vi: "Tâm lý học dọn dẹp: Buông bỏ đồ đạc để tự do", en: "Psychology of Decluttering: Letting Go to Be Free" },
        summary: { jp: "なぜ物を溜め込んでしまうのか？その心の壁を乗り越える方法。", vi: "Tại sao chúng ta hay tích trữ? Cách vượt qua rào cản tâm lý để dọn dẹp.", en: "Why do we hoard? How to overcome mental barriers to clean up." },
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Gắn bó quá mức với đồ vật đôi khi ngăn cản bạn đón nhận những trải nghiệm mới trong cuộc sống...",
          jp: "物への過度な執着は、時に新しい人生 của 経験を妨げる原因となります...",
          en: "Over-attachment to items sometimes prevents you from embracing new life experiences..."
        }
      },
      {
        id: "vc-group-mission-2024",
        title: { jp: "VC GROUPの2024年の展望と使命", vi: "Tầm nhìn và sứ mệnh VC GROUP trong năm 2024", en: "VC GROUP's 2024 Vision and Mission" },
        summary: { jp: "地域社会への貢献と、環境保護活動への取り組みについて。", vi: "Về việc đóng góp cho cộng đồng và các hoạt động bảo vệ môi trường.", en: "About community contribution and environmental protection efforts." },
        date: "2024-01-01",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        content: {
          vi: "Năm 2024, chúng tôi đặt mục tiêu nâng cao tỷ lệ tái sử dụng đồ cũ lên 90% thông qua các quy trình hiện đại...",
          jp: "2024年、私たちは最新のプロセスを通じてリユース率90%達成を目標に掲げています...",
          en: "In 2024, we aim to increase the reuse rate to 90% through modern systematic processes..."
        }
      },
    ]
  },
  services: {
    title: { jp: "事業概要", vi: "Tổng quan dịch vụ", en: "Our Services" },
    items: [
      {
        id: "junk-removal",
        title: { jp: "不用品回収", vi: "Thu gom đồ không dùng", en: "Junk Removal" },
        desc: {
          jp: "ご家庭やオフィスの不用品を迅速・丁寧に回収いたします。",
          vi: "Thu gom nhanh chóng và cẩn thận đồ không dùng từ gia đình và văn phòng.",
          en: "Quick and careful collection of unwanted items from homes and offices.",
        },
        detail: {
          vi: "Dịch vụ thu gom trọn gói của VC GROUP giúp bạn giải phóng không gian sống một cách nhanh nhất. Chúng tôi xử lý mọi loại đồ đạc từ đồ gia dụng cũ, thiết bị điện tử hỏng đến các loai rác thải lớn khó vận chuyển.",
          jp: "VC GROUPの不用品回収サービスは、お客様の居住空間を最短で快適にするお手伝いをします。古くなった家電や故障した電子機器、搬出が困難な粗大ごみまで、あらゆる不用品を迅速に処理いたします。",
          en: "VC GROUP's all-inclusive junk removal service helps you clear your living space as quickly as possible. We handle everything from old appliances and broken electronics to large, hard-to-transport waste."
        },
        image: "https://images.unsplash.com/photo-1581578731522-745d05db9ad0?q=80&w=1200",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: "reuse-sales",
        title: { jp: "リユース・中古品販売", vi: "Bán đồ cũ", en: "Reuse & Secondhand Sales" },
        desc: {
          jp: "まだ使える品物をリユースし、中古品として販売しています。",
          vi: "Tái sử dụng và bán lại các sản phẩm còn dùng được.",
          en: "We reuse and resell items that still have value.",
        },
        detail: {
          vi: "Chúng tôi tin rằng mọi món đồ đều xứng đáng có cơ hội thứ hai. Tại VC GROUP, các sản phẩm được thu gom sẽ trải qua quy trình vệ sinh và kiểm định nghiêm ngặt trước khi được đưa đến tay chủ sở hữu mới với mức giá cực kỳ ti        { id: 1, category: "appliances", price: "￥5,000", title: { vi: "Tủ lạnh mini Panasonic", jp: "パナソニック製ミニ冷蔵庫", en: "Panasonic Mini Fridge" }, image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?q=80&w=400&fit=crop" },
        { id: 2, category: "appliances", price: "￥3,000", title: { vi: "Lò vi sóng Sharp", jp: "シャープ製電子レンジ", en: "Sharp Microwave" }, image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=400&fit=crop" },
        { id: 3, category: "appliances", price: "￥8,000", title: { vi: "Máy giặt Toshiba 6kg", jp: "東芝製洗濯機 6kg", en: "Toshiba Washing Machine 6kg" }, image: "https://images.unsplash.com/photo-1626806787461-102c1bfa71e5?q=80&w=400&fit=crop" },
        { id: 4, category: "appliances", price: "￥2,000", title: { vi: "Ấm đun nước Tiger", jp: "タイガー製電気ケトル", en: "Tiger Electric Kettle" }, image: "https://images.unsplash.com/photo-1594212699903-ee8a6664329a?q=80&w=400&fit=crop" },
        
        { id: 5, category: "furniture", price: "￥12,000", title: { vi: "Bộ bàn ăn gỗ 4 ghế", jp: "木製ダイニングテーブルセット", en: "Wooden Dining Set" }, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&fit=crop" },
        { id: 6, category: "furniture", price: "￥7,000", title: { vi: "Sofa đơn màu xám", jp: "グレーのシングルソファ", en: "Grey Single Sofa" }, image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=400&fit=crop" },
        { id: 7, category: "furniture", price: "￥4,500", title: { vi: "Kệ sách 3 tầng gỗ", jp: "木製3段本棚", en: "3-Tier Wooden Bookshelf" }, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=400&fit=crop" },
        { id: 8, category: "furniture", price: "￥9,000", title: { vi: "Giường đơn kèm nệm", jp: "マットレス付きシングルベッド", en: "Single Bed with Mattress" }, image: "https://images.unsplash.com/photo-1505693419173-42b925b20671?q=80&w=400&fit=crop" },

        { id: 9, category: "kitchen", price: "￥1,500", title: { vi: "Bộ nồi Inox 3 món", jp: "ステンレス鍋3点セット", en: "Stainless Steel Pot Set" }, image: "https://images.unsplash.com/photo-1584990344313-2d2fc570498a?q=80&w=400&fit=crop" },
        { id: 10, category: "kitchen", price: "￥800", title: { vi: "Bộ chén sứ 10 chiếc", jp: "磁器の茶碗10個セット", en: "Porcelain Bowl Set 10pcs" }, image: "https://images.unsplash.com/photo-1502444330834-31427a14e138?q=80&w=400&fit=crop" },
        { id: 11, category: "kitchen", price: "￥2,500", title: { vi: "Máy xay sinh tố", jp: "ミミキサー・ジューサー", en: "Blender" }, image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=400&fit=crop" },
        { id: 12, category: "kitchen", price: "￥1,200", title: { vi: "Chảo chống dính", jp: "焦げ付きにくいフライパン", en: "Non-stick Frying Pan" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&fit=crop" },

        { id: 13, category: "baby", price: "￥4,000", title: { vi: "Xe đẩy Combi", jp: "コンビ製ベビーカー", en: "Combi Baby Stroller" }, image: "https://images.unsplash.com/photo-1591954840741-63ba9198668c?q=80&w=400&fit=crop" },
        { id: 14, category: "baby", price: "￥2,500", title: { vi: "Cũi gỗ cho bé", jp: "木製ベビーベッド", en: "Wooden Baby Crib" }, image: "https://images.unsplash.com/photo-1544126592-807daf215651?q=80&w=400&fit=crop" },
        { id: 15, category: "baby", price: "￥1,000", title: { vi: "Ghế ăn dặm", jp: "ベビー用ハイチェア", en: "Baby High Chair" }, image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=400&fit=crop" },
        { id: 16, category: "baby", price: "￥1,500", title: { vi: "Đồ chơi gỗ xếp hình", jp: "木製の知育パズル", en: "Wooden Puzzle Toys" }, image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=400&fit=crop" },

        { id: 17, category: "others", price: "￥6,000", title: { vi: "Xe đạp địa hình cũ", jp: "中古マウンテンバイク", en: "Used Mountain Bike" }, image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&fit=crop" },
        { id: 18, category: "others", price: "￥2,000", title: { vi: "Vali du lịch cỡ nhỡ", jp: "中型スーツケース", en: "Medium Suitcase" }, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=400&fit=crop" },
        { id: 19, category: "others", price: "￥1,500", title: { vi: "Đèn bàn làm việc", jp: "デスクライト", en: "Desk Lamp" }, image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400&fit=crop" },
        { id: 20, category: "others", price: "￥3,500", title: { vi: "Dụng cụ tập tạ tay", jp: "ダンベルセット", en: "Dumbbell Set" }, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&fit=crop" }
e89db7114c?q=80&w=400&fit=crop" },
        { id: 4, category: "appliances", price: "￥2,000", title: { vi: "Ấm đun nước Tiger", jp: "タイガー製電気ケトル", en: "Tiger Electric Kettle" }, image: "https://images.unsplash.com/photo-1594212699903-ee8a6664329a?q=80&w=400&fit=crop" },
        
        { id: 5, category: "furniture", price: "￥12,000", title: { vi: "Bộ bàn ăn gỗ 4 ghế", jp: "木製ダイニングテーブルセット", en: "Wooden Dining Set" }, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&fit=crop" },
        { id: 6, category: "furniture", price: "￥7,000", title: { vi: "Sofa đơn màu xám", jp: "グレーのシングルソファ", en: "Grey Single Sofa" }, image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=400&fit=crop" },
        { id: 7, category: "furniture", price: "￥4,500", title: { vi: "Kệ sách 3 tầng gỗ", jp: "木製3段本棚", en: "3-Tier Wooden Bookshelf" }, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=400&fit=crop" },
        { id: 8, category: "furniture", price: "￥9,000", title: { vi: "Giường đơn kèm nệm", jp: "マットレス付きシングルベッド", en: "Single Bed with Mattress" }, image: "https://images.unsplash.com/photo-1505693419173-42b925b20671?q=80&w=400&fit=crop" },

        { id: 9, category: "kitchen", price: "￥1,500", title: { vi: "Bộ nồi Inox 3 món", jp: "ステンレス鍋3点セット", en: "Stainless Steel Pot Set" }, image: "https://images.unsplash.com/photo-1584990344313-2d2fc570498a?q=80&w=400&fit=crop" },
        { id: 10, category: "kitchen", price: "￥800", title: { vi: "Bộ chén sứ 10 chiếc", jp: "磁器の茶碗10個セット", en: "Porcelain Bowl Set 10pcs" }, image: "https://images.unsplash.com/photo-1594913785162-e6785b42fbb1?q=80&w=400&fit=crop" },
        { id: 11, category: "kitchen", price: "￥2,500", title: { vi: "Máy xay sinh tố", jp: "ミキサー・ジューサー", en: "Blender" }, image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=400&fit=crop" },
        { id: 12, category: "kitchen", price: "￥1,200", title: { vi: "Chảo chống dính", jp: "焦げ付きにくいフライパン", en: "Non-stick Frying Pan" }, image: "https://images.unsplash.com/photo-1584990344313-2d2fc570498a?q=80&w=400&fit=crop" },

        { id: 13, category: "baby", price: "￥4,000", title: { vi: "Xe đẩy Combi", jp: "コンビ製ベビーカー", en: "Combi Baby Stroller" }, image: "https://images.unsplash.com/photo-1591954840741-63ba9198668c?q=80&w=400&fit=crop" },
        { id: 14, category: "baby", price: "￥2,500", title: { vi: "Cũi gỗ cho bé", jp: "木製ベビーベッド", en: "Wooden Baby Crib" }, image: "https://images.unsplash.com/photo-1544126592-807daf215651?q=80&w=400&fit=crop" },
        { id: 15, category: "baby", price: "￥1,000", title: { vi: "Ghế ăn dặm", jp: "ベビー用ハイチェア", en: "Baby High Chair" }, image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=400&fit=crop" },
        { id: 16, category: "baby", price: "￥1,500", title: { vi: "Đồ chơi gỗ xếp hình", jp: "木製の知育パズル", en: "Wooden Puzzle Toys" }, image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=400&fit=crop" },

        { id: 17, category: "others", price: "￥6,000", title: { vi: "Xe đạp địa hình cũ", jp: "中古マウンテンバイク", en: "Used Mountain Bike" }, image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&fit=crop" },
        { id: 18, category: "others", price: "￥2,000", title: { vi: "Vali du lịch cỡ nhỡ", jp: "中型スーツケース", en: "Medium Suitcase" }, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=400&fit=crop" },
        { id: 19, category: "others", price: "￥1,500", title: { vi: "Đèn bàn làm việc", jp: "デスクライト", en: "Desk Lamp" }, image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400&fit=crop" },
        { id: 20, category: "others", price: "￥3,500", title: { vi: "Dụng cụ tập tạ tay", jp: "ダンベルセット", en: "Dumbbell Set" }, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&fit=crop" }
      ]
    }
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
        reuseStory: { 
          vi: "Trong dự án này, khách hàng đang rất bối rối vì lượng đồ đạc khổng lồ cần dọn dẹp phân loại. Đội ngũ VC GROUP đã đến tận nơi đánh giá và tư vấn phương án xử lý tối ưu nhất. Các đồ nội thất gỗ như tủ, bàn ghế còn tốt đều được chúng tôi cẩn thận bọc lại và chuyển đến xưởng tân trang để tiếp tục vòng đời phục vụ những người cần đến. Khách hàng đã vô cùng hài lòng vì không những nhà dọn sạch sẽ mà còn đóng góp bảo vệ môi trường.", 
          jp: "このプロジェクトでは、大量の不用品の仕分けと処分にお悩みのお客様からのご相談でした。VC GROUPのスタッフが現地で最適な処理方法をご提案しました。状態の良い木製家具（タンスやテーブルなど）は丁寧に梱包し、自社工房へと運び、修理・清掃を行って新たなリユース品として生まれ変わらせました。お部屋が綺麗になっただけでなく、環境にも貢献できたとお客様に大変喜んでいただきました。", 
          en: "In this project, the client was overwhelmed by the massive amount of furniture needing to be sorted and removed. The VC GROUP team visited the site to evaluate and propose the most optimal plan. Well-maintained wooden furniture, such as cabinets and tables, were carefully wrapped and transported to our workshop to be refurbished and given a second life. The customer was extremely satisfied with both the spotless apartment and their contribution to protecting the environment." 
        }
      },
      {
        id: "ac-installation",
        title: { jp: "エアコン取付工事", vi: "Lắp đặt điều hòa", en: "AC Installation" },
        before: { vi: "Khu vực tường trống chưa có hệ thống làm mát.", jp: "冷房設備がない空の状態の壁面。", en: "Empty wall without any cooling system." },
        after: { vi: "Hệ thống điều hòa công nghiệp vận hành ổn định, thẩm mỹ cao.", jp: "業務用エアコンが美しく設置され、安定稼働している状態。", en: "Industrial AC system installed professionally and running smoothly." },
        reuseStory: { 
          vi: "Khách hàng cần nâng cấp hệ thống làm mát nhưng lo lắng về việc xử lý các linh kiện máy móc cũ sao cho an toàn. Chúng tôi không chỉ lắp đặt hệ thống điều hòa công nghiệp mới với tiêu chuẩn thẩm mỹ cao nhất mà còn thu gom toàn bộ thiết bị cũ. Các bộ phận kim loại và mạch điện tử được chúng tôi bóc tách, phân loại kỹ lưỡng và chuyển đến các nhà máy tái chế chuyên dụng, đảm bảo không có chất thải độc hại rò rỉ ra môi trường.", 
          jp: "お客様は新しい空調設備の導入にあたり、古い機器の安全な処分を懸念されていました。私たちは美しい仕上がりの業務用エアコン設置を行うと同時に、古い機器も全て回収しました。回収したエアコンから金属部品と電子基板を細かく分別し、専門のリサイクル工場へと運搬することで、有害物質の環境への漏出を完全に防ぎました。", 
          en: "The client needed to upgrade their cooling system but was concerned about safely disposing of the old machinery. We not only installed the new industrial AC system with the highest aesthetic standards but also collected all the old equipment. We carefully dismantled and sorted the metal components and electronic circuit boards, sending them to specialized recycling plants to ensure no hazardous materials leaked into the environment." 
        }
      },
      {
        id: "furniture-reuse",
        title: { jp: "中古家具リユース", vi: "Tái sử dụng nội thất cũ", en: "Furniture Reuse" },
        before: { vi: "Sofa và bàn cũ bị bám bụi, chuẩn bị bỏ đi.", jp: "埃を被り、廃棄される予定だった古い家具。", en: "Dusty old sofa and table marked for disposal." },
        after: { vi: "Sản phẩm như mới sau khi được vệ sinh công nghiệp và bọc lại.", jp: "クリーニングと張り替えを経て、新品同様に蘇った家具。", en: "Furniture restored to like-new condition after professional cleaning." },
        reuseStory: { 
          vi: "Nhiều gia đình thường có xu hướng vứt bỏ những bộ sofa hay bàn trà trông có vẻ cũ kỹ. Thật ra, phần khung gỗ của chúng vẫn vô cùng chắc chắn. Đội ngũ thợ lành nghề của chúng tôi đã tiếp nhận, đánh bóng lại gỗ, vệ sinh công nghiệp lớp nỉ và bọc lại da mới. Nhờ quy trình chặt chẽ này, những món đồ cũ đã 'sống lại' như mới, giúp chủ nhân mới tiết kiệm đến 80% chi phí so với mua ngoài cửa hàng.", 
          jp: "多くのご家庭では、少し古びて見えるソファやテーブルを廃棄してしまいがちですが、実は木製のフレームはまだ非常に丈夫な状態です。当社の熟練した職人がこれらを引き取り、木枠を磨き直し、布部分の専用クリーニングや革の張り替えを行いました。この徹底したプロセスにより、古い家具は新品同様に蘇り、新しい持ち主の皆様のお財布にも優しい循環を生み出しました。", 
          en: "Many families tend to throw out sofas or tables that look a bit old, but the inner wooden frames are often still incredibly sturdy. Our team of skilled craftsmen took these in, polished the wood, professionally cleaned the fabric, and reupholstered them. Thanks to this rigorous process, these old items were brought back to life looking brand new, saving the next owners up to 80% compared to buying from a store." 
        }
      },
      {
        id: "waste-transport",
        title: { jp: "産業廃棄物運搬", vi: "Vận chuyển rác thải", en: "Waste Transport" },
        before: { vi: "Rác thải công nghiệp tích tụ gây cản trở sản xuất tại nhà máy.", jp: "工場の生産ラインを妨げていた産業廃棄物の山。", en: "Industrial waste pile obstructing factory production." },
        after: { vi: "Mặt bằng thông thoáng, đạt tiêu chuẩn an toàn vệ sinh môi trường.", jp: "環境衛生基準をクリアし、生産スペースが確保された状態。", en: "Clear floor meeting environmental safety standards." },
        reuseStory: { 
          vi: "Nhà máy đối tác đã đối mặt với núi rác thải công nghiệp khổng lồ làm ách tắc dây chuyền sản xuất. VC GROUP đã điều động chuỗi xe tải cỡ lớn đến xử lý cấp tốc trong đêm để không ảnh hưởng lịch trình làm việc ngày hôm sau. Khác với việc đem vứt bỏ toàn bộ, chúng tôi đã thuê nhân công lọc tách từng mảng kim loại phế liệu, đồng và nhôm để chuyển trực tiếp đến lò nung luyện kim. Nhờ vậy, tỷ lệ rác thải ra bãi chôn lấp giảm đi một nửa.", 
          jp: "パートナーの工場では、生産ラインを圧迫するほどの産業廃棄物の山に悩まされていました。VC GROUPは翌日の業務に支障が出ないよう、夜間に大型トラックを配備して緊急対応を行いました。ただ全てを廃棄するのではなく、作業員を手配して金属スクラップ、銅、アルミを一つずつ丁寧に選別し、製鉄所へと直接運びました。その結果、埋立地に向かうゴミの量を半分に減らすことができました。", 
          en: "Our partner factory faced a massive mountain of industrial waste that was bottlenecking their production line. VC GROUP dispatched a fleet of large trucks to handle this urgently overnight so as not to affect the next day's schedule. Instead of simply dumping everything, we hired workers to painstakingly separate metal scrap, copper, and aluminum to send directly to smelting plants. As a result, the volume of waste heading to the landfill was reduced by half." 
        }
      },
      {
        id: "office-cleanup",
        title: { jp: "Dọn dẹp văn phòng", vi: "Dọn dẹp văn phòng", en: "Office Cleanup" },
        before: { vi: "Văn phòng cũ nhiều giấy tờ và thiết bị điện tử hỏng.", jp: "古い書類や故障した電子機器が混在するオフィス。", en: "Office cluttered with old documents and broken electronics." },
        after: { vi: "Văn phòng trống sẵn sàng bàn giao cho chủ mới.", jp: "明け渡し準備が整った、何もない清らかな状態のオフィス。", en: "Empty office ready for handover to new tenants." },
        reuseStory: { 
          vi: "Khi một công ty lớn chuyển đi, họ để lại vô số giấy tờ vụn và các dàn máy tính cũ kỹ. Để văn phòng có thể nhanh chóng bàn giao cho khách thuê mới, chúng tôi đã dọn dẹp sạch sẽ chỉ trong 2 ngày cuối tuần. Đặc biệt, thay vì nghiền nát máy tính, các kỹ thuật viên của VC GROUP đã kiểm tra cẩn thận từng chiếc, thay thế linh kiện hỏng hóc và đóng gói cẩn thận. Lô máy tính này sau đó đã được quyên góp cho một điểm trường vùng cao như một món quà ý nghĩa.", 
          jp: "大手企業が移転した際、大量の不要な書類と古いPCが残されていました。新しいテナントへスムーズに引き渡せるよう、週末の2日間だけでオフィスを完全に清掃し終えました。特筆すべきは、PCをそのまま破棄するのではなく、VC GROUPの技術者が1台ずつ丁寧に検査し、故障箇所を修理して綺麗に梱包したことです。これらのPCは後日、教育支援の一環として地方の学校へ寄付されました。", 
          en: "When a large company relocated, they left behind piles of shredded paper and outdated computers. To ensure the office was ready for handover to the new tenants, we completely cleaned the space over a single weekend. Most importantly, instead of crushing the computers, VC GROUP technicians carefully inspected each one, replaced broken parts, and packed them securely. This batch of computers was later donated to a rural school as a meaningful gift." 
        }
      },
      {
        id: "moving-disposal",
        title: { jp: "引越し不用品処分", vi: "Xử lý đồ khi chuyển nhà", en: "Moving Disposal" },
        before: { vi: "Giai đoạn hỗn loạn khi chuyển nhà với nhiều đồ bỏ lại.", jp: "引越し作業中の、不用品が混在する混乱した様子。", en: "Chaotic move-out scene with many items left behind." },
        after: { vi: "Toàn bộ rác thải được xử lý gọn gàng trong ngày.", jp: "全ての不用品が即日で片付けられ、スッキリした状態。", en: "All unwanted items cleared neatly within the same day." },
        reuseStory: { 
          vi: "Chuyển nhà luôn là ác mộng với những món đồ lặt vặt dư thừa không biết xử lý ra sao. Khách hàng đã gọi cho chúng tôi vào phút chót khi ngày trả phòng đã kề cận. Nhân viên nhiệt tình của VC GROUP đã có mặt sau 30 phút, tốc chiến tốc thắng thu gom toàn bộ. Chúng tôi tự tay phân loại từ chai nhựa, giấy carton đến vải vụn ngay tại chỗ. Bằng sự tỉ mỉ chuẩn Nhật, mọi thứ đều được gửi vào đúng chu trình tái chế, mang lại sự an tâm tuyệt đối cho chủ nhà.", 
          jp: "引越しは、どう処分していいか分からない細かな不用品が悩みの種になりがちです。お客様は退去日が迫る中、ギリギリのタイミングで当社にご連絡いただきました。熱意あるスタッフが30分で駆けつけ、あっという間に全てを回収しました。現場でペットボトルから段ボール、古布に至るまで手作業で分別しました。日本品質の丁寧な作業により、全てが正しいリサイクルルートへ乗り、お客様にも大きな安心をお届けできました。", 
          en: "Moving is always a nightmare with leftover odds and ends that nobody knows how to dispose of. The customer called us at the very last minute with their move-out deadline looming. VC GROUP's dedicated staff arrived within 30 minutes and swiftly collected everything. We manually sorted plastic bottles, cardboard, and fabric scraps right on site. With Japanese-standard meticulousness, everything was sent into the correct recycling loop, bringing absolute peace of mind to the homeowner." 
        }
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
    representative: { label: { jp: "代表取締役社長", vi: "Giám đốc đại diện", en: "Representative Director" }, value: "PHAN DUY PHUONG （ファン ズイ フォン）" },
    established: { label: { jp: "設立", vi: "Thành lập", en: "Established" }, value: "2020年12月28日" },
    capital: { label: { jp: "資本金", vi: "Vốn", en: "Capital" }, value: "２０００万円" },
    address: {
      label: { jp: "所在地", vi: "Địa chỉ", en: "Address" },
      value: "〒343-0837 埼玉県越谷市蒲生本町3-30",
    },
    warehouse: {
      label: { jp: "倉庫所在地", vi: "Địa chỉ kho", en: "Warehouse Address" },
      value: "〒270-0229 千葉県野田市なみき 4-31-11",
    },
    phone: { label: { jp: "電話番号", vi: "Điện thoại", en: "Phone" }, value: "048-919-2962" },
    email: { label: { jp: "メール", vi: "Email", en: "Email" }, value: "info@vcgroup.jp" },
    business: {
      label: { jp: "事業内容", vi: "Lĩnh vực kinh doanh", en: "Business Activities" },
      value: { 
        jp: "不用品回収・産業廃棄物運搬収集・エアコン取り付け",
        vi: "Thu gom phế liệu・Vận chuyển rác thải công nghiệp・Lắp đặt điều hòa",
        en: "Junk removal・Industrial waste transport・AC installation"
      }
    },
    licenses: {
      label: { jp: "許可", vi: "Giấy phép", en: "Licenses" },
      value: "古物商許可 第 431270053223 号\n自家用自動車有償貸渡業の許可 交付番号第 1007 号"
    }
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
