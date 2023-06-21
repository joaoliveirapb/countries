import Link from 'next/link'
import { ThemeButton } from './ThemeButton'

export function Header() {
  return (
    <header className="relative z-10 flex justify-between px-16 py-5 shadow-md dark:bg-blue-900 max-[490px]:px-4">
      <Link href="/" className="text-2xl font-bold max-[490px]:text-lg">
        Where in the World?
      </Link>
      <ThemeButton />
    </header>
  )
}
