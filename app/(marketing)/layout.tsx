export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-full bg-slate-100">
      <div className="pb-20 pt-40">{children}</div>
    </main>
  )
}
