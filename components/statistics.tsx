const stats = [
  {
    number: "500+",
    label: "Khách hàng tin tưởng",
  },
  {
    number: "10+",
    label: "Năm kinh nghiệm",
  },
  {
    number: "98%",
    label: "Tỷ lệ thành công",
  },
  {
    number: "20+",
    label: "Quốc gia phục vụ",
  },
]

export function Statistics() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.number}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
