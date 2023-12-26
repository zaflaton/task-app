import { Navbar } from './_components/navbar'

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}
