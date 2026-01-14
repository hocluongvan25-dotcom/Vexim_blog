import { Users, Clock, DollarSign, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Chuyên gia giàu kinh nghiệm",
    description: "Từ Mía đường Lam Sơn, Minh Phú Seafood đến xí nghiệp nhỏ 10 người ở Đồng Tháp - tất cả đều chọn chúng tôi vì sự tận tâm và chuyên môn thực chiến.",
  },
  {
    icon: Clock,
    title: "Xử lý trong 2-8 ngày, không chờ đợi",
    description: "Trong khi công ty khác báo 2-3 tháng, chúng tôi cam kết hoàn thành FDA trong 10 ngày, GACC trong 30 ngày. Nếu trễ hạn - hoàn 100% phí dịch vụ.",
  },
  {
    icon: DollarSign,
    title: "Minh bạch - Không phát sinh",
    description: "Báo giá chi tiết từng khoản ngay từ đầu. Bạn biết chính xác mình trả tiền cho cái gì. Cam kết không thu thêm 1 đồng nào ngoài hợp đồng.",
  },
  {
    icon: Headphones,
    title: "Hotline khẩn cấp 24/7",
    description: "Luôn sẵn sàng giải đáp mọi thắc mắc, đồng hành cùng doanh nghiệp trong suốt quá trình hợp tác.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Tại sao chọn Vexim Global?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chúng tôi cam kết mang đến giá trị vượt trội cho mọi khách hàng
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
