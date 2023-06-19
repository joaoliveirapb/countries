import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <div className="relative flex items-center">
      <Search size={20} className="absolute ml-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-[450px] rounded-md px-14 py-4 text-xs shadow-md focus:outline-none dark:bg-blue-900 dark:placeholder:text-white"
      />
    </div>
  )
}
