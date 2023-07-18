'use client'

import { CountriesContext } from '@/context/CountriesContext'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useContext } from 'react'

export function FilterByRegion() {
  const {
    getCountries,
    filterByRegion,
    countriesIsFiltered,
    filterIsOpen,
    setFilterIsOpen,
  } = useContext(CountriesContext)

  return (
    <div>
      <button
        className="flex items-center gap-5 rounded-md bg-white px-4 py-4 text-xs shadow-md dark:bg-blue-900"
        onClick={() => setFilterIsOpen(!filterIsOpen)}
      >
        Filter by Region
        {!filterIsOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>
      {filterIsOpen && (
        <div className="absolute mt-1 w-40 rounded-md bg-white shadow-md dark:bg-blue-900">
          <ul className="flex flex-col px-4 py-2 text-sm">
            <button
              className="py-1 text-left"
              onClick={() => filterByRegion('africa')}
            >
              Africa
            </button>
            <button
              className="py-1 text-left"
              onClick={() => filterByRegion('america')}
            >
              America
            </button>
            <button
              className="py-1 text-left"
              onClick={() => filterByRegion('asia')}
            >
              Asia
            </button>
            <button
              className="py-1 text-left"
              onClick={() => filterByRegion('europe')}
            >
              Europe
            </button>
            <button
              className="py-1 text-left"
              onClick={() => filterByRegion('oceania')}
            >
              Oceania
            </button>
            {countriesIsFiltered && (
              <button
                className="rounded-md bg-red-500/30 py-1 text-red-500"
                onClick={getCountries}
              >
                All Countries
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
