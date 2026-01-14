"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { ConsultationDialog } from "./consultation-dialog"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    honeypot: "", // Thêm honeypot field
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 24h.")
        setFormData({ name: "", phone: "", email: "", service: "", honeypot: "" })
      } else {
        setSubmitMessage(`✗ ${data.error || "Có lỗi xảy ra. Vui lòng thử lại."}`)
      }
    } catch (error) {
      setSubmitMessage("✗ Không thể kết nối. Vui lòng kiểm tra mạng và thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Giải Pháp Xuất Nhập Khẩu Toàn Cầu
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Đối tác tin cậy của hơn 500 doanh nghiệp Việt Nam trong việc chinh phục thị trường quốc tế. Chúng tôi mang
              đến dịch vụ tư vấn pháp lý xuất nhập khẩu chuyên nghiệp, nhanh chóng và hiệu quả.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white/90">Chuyên gia giàu kinh nghiệm 10+ năm</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white/90">Thủ tục nhanh chóng, chi phí tối ưu</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white/90">Hỗ trợ 24/7, tư vấn miễn phí</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setIsDialogOpen(true)}
            >
              Bắt đầu ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Consultation Form */}
          <Card id="consultation-form" className="p-6 md:p-8 bg-white shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-2">Đăng ký tư vấn miễn phí</h3>
            <p className="text-muted-foreground mb-6">Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 24h</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field ẩn */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ position: "absolute", left: "-9999px" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Họ và tên <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Số điện thoại <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0912 345 678"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Loại dịch vụ quan tâm
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  disabled={isSubmitting}
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="fda">Đăng ký FDA</option>
                  <option value="gacc">Mã GACC</option>
                  <option value="mfds">Giấy phép MFDS - KOREA</option>
                  <option value="agent-us">Dịch vụ Agent Hoa Kỳ</option>
                  <option value="ai-traceability">Nền tảng truy xuất nguồn gốc tích hợp AI</option>
                  <option value="delegation">Uỷ thác xuất nhập khẩu</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              {submitMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${submitMessage.startsWith("✓") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitMessage}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  "Gửi yêu cầu tư vấn"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <ConsultationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}
