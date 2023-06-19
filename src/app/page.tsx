import { CountryItem } from '@/components/CountryItem'
import { Search } from '@/components/Search'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-16 py-10 dark:bg-blue-950">
      <Search />
      <div className="mt-12 grid grid-cols-custom justify-between gap-y-12">
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </div>
    </main>
  )
}
