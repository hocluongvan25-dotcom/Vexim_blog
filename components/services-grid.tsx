import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/fda-food-safety-inspection-laboratory-professional.jpg",
    title: "Đăng ký FDA",
    description:
      "Tư vấn và hỗ trợ đăng ký FDA cho thực phẩm, mỹ phẩm, thiết bị y tế xuất khẩu sang thị trường Hoa Kỳ. Quy trình chuyên nghiệp, đảm bảo tuân thủ.",
    link: "/services/fda",
  },
  {
    image: "/china-customs-port-container-shipping-trade.jpg",
    title: "Đăng ký GACC",
    description:
      "Hỗ trợ doanh nghiệp đăng ký mã số GACC để xuất khẩu hàng hóa vào Trung Quốc. Kinh nghiệm phong phú, tỷ lệ thành công cao.",
    link: "/services/gacc",
  },
  {
    image: "/korean-cosmetics-health-products-laboratory-qualit.jpg",
    title: "Giấy phép MFDS (Hàn Quốc)",
    description:
      "Tư vấn cấp giấy phép Bộ An toàn Thực phẩm và Dược phẩm Hàn Quốc cho sản phẩm thực phẩm chức năng, mỹ phẩm.",
    link: "/services/mfds",
  },
  {
    image: "/us-customs-broker-agent-import-export-documentatio.jpg",
    title: "Dịch vụ Agent Hoa Kỳ",
    description:
      "Đại diện pháp lý tại Hoa Kỳ cho doanh nghiệp Việt Nam, xử lý mọi thủ tục hải quan, tuân thủ và giao nhận hàng hóa một cách chuyên nghiệp.",
    link: "/services/us-agent",
  },
  {
    image: "/ai-technology-blockchain-supply-chain-digital-trac.jpg",
    title: "Nền tảng truy xuất nguồn gốc tích hợp AI",
    description:
      "Giải pháp công nghệ tiên phong đầu tiên tại Việt Nam, ứng dụng AI và Blockchain để truy xuất nguồn gốc sản phẩm, tăng cường minh bạch chuỗi cung ứng.",
    link: "/services/ai-traceability",
    badge: "Đầu tiên tại VN",
  },
  {
    image: "/international-trade-export-logistics-cargo-shippin.jpg",
    title: "Ủy thác xuất khẩu",
    description:
      "Dịch vụ ủy thác xuất nhập khẩu toàn diện, giúp doanh nghiệp tiết kiệm chi phí và đơn giản hóa quy trình thương mại quốc tế.",
    link: "/services/export-delegation",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Giải pháp toàn diện cho mọi nhu cầu xuất nhập khẩu của doanh nghiệp bạn
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
