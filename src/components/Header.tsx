import Link from 'next/link'
import { ThemeButton } from './ThemeButton'

export function Header() {
  return (
    <header className="relative z-10 flex justify-between px-16 py-5 shadow-md dark:bg-blue-900">
      <Link href="/" className="text-2xl font-bold">
        Where in the World?
      </Link>
      <ThemeButton />
    </header>
  )
}
