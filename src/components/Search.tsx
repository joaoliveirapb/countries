import { FilterByRegion } from './FilterByRegion'
import { SearchInput } from './SearchInput'

export function Search() {
  return (
    <div className="relative flex justify-between">
      <SearchInput />
      <FilterByRegion />
    </div>
  )
}
