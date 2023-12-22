import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full border-t bg-slate-100 px-4 py-2">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  )
}
