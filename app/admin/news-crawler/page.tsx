import { NewsCrawlerDashboard } from "@/components/admin/news-crawler-dashboard"

export default function NewsCrawlerPage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">News Crawler Bot</h1>
        <p className="text-muted-foreground">Tự động thu thập và lọc tin tức từ FDA và GACC với AI filtering 3 lớp</p>
      </div>

      <NewsCrawlerDashboard />

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Setup Cron Job (Daily)</h3>
        <p className="text-sm text-muted-foreground mb-4">Để chạy tự động mỗi ngày, thêm environment variable:</p>
        <code className="block p-3 bg-background rounded text-sm">CRON_SECRET=your_secret_key</code>
        <p className="text-sm text-muted-foreground mt-4">
          Sau đó setup Vercel Cron hoặc dùng service như cron-job.org để gọi:
        </p>
        <code className="block p-3 bg-background rounded text-sm mt-2">
          GET /api/news/cron
          <br />
          Authorization: Bearer your_secret_key
        </code>
      </div>
    </div>
  )
}
