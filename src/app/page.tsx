import { CountryItem } from '@/components/CountryItem'
import { Search } from '@/components/Search'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-16 py-10 dark:bg-blue-950 max-[490px]:px-4">
      <Search />
      <div className="mt-12 grid grid-cols-four justify-between gap-y-12 max-[1200px]:grid-cols-three max-[920px]:grid-cols-two max-[660px]:grid-cols-one max-[660px]:justify-center min-[1600px]:grid-cols-five">
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </div>
    </main>
  )
}
