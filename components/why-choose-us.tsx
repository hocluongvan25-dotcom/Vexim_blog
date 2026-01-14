import { Users, Clock, DollarSign, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Chuyên gia giàu kinh nghiệm",
    description: "Đội ngũ tư vấn viên dày dặn kinh nghiệm 10+ năm trong lĩnh vực xuất nhập khẩu và pháp lý quốc tế.",
  },
  {
    icon: Clock,
    title: "Thời gian nhanh chóng",
    description: "Cam kết xử lý hồ sơ nhanh nhất, rút ngắn thời gian chờ đợi, giúp doanh nghiệp tiết kiệm thời gian.",
  },
  {
    icon: DollarSign,
    title: "Chi phí tối ưu",
    description: "Mức phí cạnh tranh, minh bạch, không phát sinh chi phí ẩn. Tư vấn miễn phí trước khi triển khai.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
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
