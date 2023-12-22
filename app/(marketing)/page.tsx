import Link from 'next/link'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import { Medal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const headingFont = localFont({
  src: '../../public/font/font.woff2',
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          'flex flex-col items-center justify-center',
          headingFont.className,
        )}
      >
        <p className="mb-4 flex items-center rounded-full border bg-amber-100 p-4 text-amber-700 shadow-sm">
          <Medal className="mr-2 h-8 w-8" />
          <span className="pt-1 uppercase">No 1 task management</span>
        </p>
        <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">
          <span className="text-emerald-500">tasked</span> helps team move
          faster
        </h1>
        <p className="w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 px-6 py-4 text-3xl text-white md:text-6xl">
          work forward.
        </p>
      </div>
      <p
        className={cn(
          'mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl',
          textFont.className,
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with task-app.
      </p>
      <Button size="lg" className="mt-6 font-semibold" asChild>
        <Link href="/sign-up">Get tasked for free</Link>
      </Button>
    </div>
  )
}
