import { FilterByRegion } from './FilterByRegion'
import { SearchInput } from './SearchInput'

export function Search() {
  return (
    <div className="relative flex justify-between max-md:flex-col max-md:gap-5">
      <SearchInput />
      <FilterByRegion />
    </div>
  )
}
