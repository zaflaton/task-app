import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const headingFont = localFont({
  src: '../../public/font/font.woff2',
})

export default function Logo() {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className={cn('text-lg text-emerald-700', headingFont.className)}>
          tasked
        </p>
      </div>
    </Link>
  )
}
