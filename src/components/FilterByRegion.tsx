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
          <ul className="px-4 py-2 text-sm">
            <li
              className="cursor-pointer rounded-md py-1"
              onClick={() => filterByRegion('africa')}
            >
              Africa
            </li>
            <li
              className="cursor-pointer rounded-md py-1"
              onClick={() => filterByRegion('america')}
            >
              America
            </li>
            <li
              className="cursor-pointer rounded-md py-1"
              onClick={() => filterByRegion('asia')}
            >
              Asia
            </li>
            <li
              className="cursor-pointer rounded-md py-1"
              onClick={() => filterByRegion('europe')}
            >
              Europe
            </li>
            <li
              className="cursor-pointer rounded-md py-1"
              onClick={() => filterByRegion('oceania')}
            >
              Oceania
            </li>
            {countriesIsFiltered && (
              <li
                className="cursor-pointer rounded-md bg-red-500/30 py-1 text-center text-red-500"
                onClick={getCountries}
              >
                All Countries
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
