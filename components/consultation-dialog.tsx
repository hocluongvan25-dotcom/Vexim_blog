"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

interface ConsultationDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function ConsultationDialog({ open, onOpenChange, children }: ConsultationDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    honeypot: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  // Use controlled or uncontrolled based on props
  const dialogOpen = open !== undefined ? open : isOpen
  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    } else {
      setIsOpen(newOpen)
    }
  }

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
        setTimeout(() => {
          handleOpenChange(false)
          setFormData({ name: "", phone: "", email: "", service: "", honeypot: "" })
          setSubmitMessage("")
        }, 2000)
      } else {
        setSubmitMessage(`✗ ${data.error || "Có lỗi xảy ra. Vui lòng thử lại."}`)
      }
    } catch (error) {
      setSubmitMessage("✗ Không thể kết nối. Vui lòng kiểm tra mạng và thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // If children is provided, render as a wrapper with trigger
  if (children) {
    return (
      <>
        <div onClick={() => handleOpenChange(true)}>{children}</div>
        <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Đăng ký tư vấn miễn phí</DialogTitle>
              <DialogDescription>Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong vòng 24h</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                <label htmlFor="popup-name" className="block text-sm font-medium mb-2">
                  Họ và tên <span className="text-destructive">*</span>
                </label>
                <Input
                  id="popup-name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="popup-phone" className="block text-sm font-medium mb-2">
                  Số điện thoại <span className="text-destructive">*</span>
                </label>
                <Input
                  id="popup-phone"
                  type="tel"
                  placeholder="0912 345 678"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="popup-email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="popup-service" className="block text-sm font-medium mb-2">
                  Loại dịch vụ quan tâm
                </label>
                <select
                  id="popup-service"
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
          </DialogContent>
        </Dialog>
      </>
    )
  }

  // Otherwise, render as controlled dialog
  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Đăng ký tư vấn miễn phí</DialogTitle>
          <DialogDescription>Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong vòng 24h</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            <label htmlFor="popup-name" className="block text-sm font-medium mb-2">
              Họ và tên <span className="text-destructive">*</span>
            </label>
            <Input
              id="popup-name"
              type="text"
              placeholder="Nguyễn Văn A"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="popup-phone" className="block text-sm font-medium mb-2">
              Số điện thoại <span className="text-destructive">*</span>
            </label>
            <Input
              id="popup-phone"
              type="tel"
              placeholder="0912 345 678"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="popup-email"
              type="email"
              placeholder="email@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="popup-service" className="block text-sm font-medium mb-2">
              Loại dịch vụ quan tâm
            </label>
            <select
              id="popup-service"
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
      </DialogContent>
    </Dialog>
  )
}

export default ConsultationDialog
