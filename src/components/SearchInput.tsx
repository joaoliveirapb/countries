import { CountriesContext } from '@/context/CountriesContext'
import { Search } from 'lucide-react'
import { useContext } from 'react'

export function SearchInput() {
  const { search, setSearch } = useContext(CountriesContext)

  return (
    <div className="relative flex items-center">
      <Search size={20} className="absolute ml-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[450px] rounded-md px-14 py-4 text-xs shadow-md focus:outline-none dark:bg-blue-900 dark:placeholder:text-white"
      />
    </div>
  )
}
