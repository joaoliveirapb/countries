'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function FilterByRegion() {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false)

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
            <li className="cursor-pointer rounded-md py-1">Africa</li>
            <li className="cursor-pointer rounded-md py-1">America</li>
            <li className="cursor-pointer rounded-md py-1">Asia</li>
            <li className="cursor-pointer rounded-md py-1">Europe</li>
            <li className="cursor-pointer rounded-md py-1">Oceania</li>
          </ul>
        </div>
      )}
    </div>
  )
}
