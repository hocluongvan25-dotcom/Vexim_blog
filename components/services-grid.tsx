import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/fda-food-safety-inspection-laboratory-professional.jpg",
    title: "Đăng ký FDA",
    description:
      "Đối tác Mỹ đang gấp? Container sắp đến cảng nhưng chưa có FDA? Chúng tôi xử lý trong 5-10 ngày, giúp bạn không bị delay đơn hàng.",
    link: "/services/fda",
  },
  {
    image: "/china-customs-port-container-shipping-trade.jpg",
    title: "Tư vẫn Mã GACC",
    description:
      "Xuất sang Trung Quốc mà không có GACC - container chắc chắn bị giữ 100%. Chúng tôi đã giúp 300+ cơ sở xin mã GACC thành công.",
    link: "/services/gacc",
  },
  {
    image: "/korean-cosmetics-health-products-laboratory-qualit.jpg",
    title: "Giấy phép MFDS - Hàn Quốc",
    description:
      "Thị trường Hàn Quốc khó tính với mỹ phẩm và thực phẩm chức năng. Chúng tôi am hiểu K-beauty standards, giúp sản phẩm Việt vượt qua thanh tra MFDS.",
    link: "/services/mfds",
  },
  {
    image: "/us-customs-broker-agent-import-export-documentatio.jpg",
    title: "Dịch vụ Agent Hoa Kỳ",
    description:
      "Cần địa chỉ pháp lý tại Mỹ để nhận thư FDA? Hoặc cần người xử lý khi bị FDA cảnh báo? Chúng tôi là đại diện của bạn tại đất Mỹ 24/7.",
    link: "/services/us-agent",
  },
  {
    image: "/ai-technology-blockchain-supply-chain-digital-trac.jpg",
    title: "Nền tảng truy xuất nguồn gốc AI",
    description:
      "Từ đồng ruộng đến siêu thị - khách hàng quét QR là biết nguồn gốc. Công nghệ blockchain + AI giúp bạn chứng minh chất lượng, tăng giá bán 20-30%.",
    link: "/services/ai-traceability",
    badge: "Công nghệ mới",
  },
  {
    image: "/international-trade-export-logistics-cargo-shippin.jpg",
    title: "Ủy thác xuất khẩu",
    description:
      "Doanh nghiệp nhỏ, chưa có giấy phép xuất khẩu? Ủy thác cho chúng tôi - bạn chỉ lo sản xuất, phần còn lại hãy để Vexim Global hỗ trợ bạn.",
    link: "/services/export-delegation",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Chúng tôi giải quyết vấn đề gì cho bạn?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Không chỉ làm giấy tờ - chúng tôi giúp bạn tránh rủi ro và tăng cơ hội thành công
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 p-0 cursor-pointer hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover w-full group-hover:scale-110 transition-transform duration-500 rounded-t-lg"
                  />
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {service.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Tìm hiểu thêm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
