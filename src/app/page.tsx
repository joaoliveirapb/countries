'use client'

import { CountryCard } from '@/components/CountryCard'
import { LoaderSkeletonPrimary } from '@/components/LoaderSkeletonPrimary'
import { Search } from '@/components/Search'
import { CountriesContext } from '@/context/CountriesContext'
import { useContext } from 'react'

export default function Home() {
  const { filteredCountries } = useContext(CountriesContext)

  return (
    <main className="bg-neutral-50 px-16 py-10 dark:bg-blue-950 max-[490px]:px-4">
      <Search />
      <div className="mt-12 grid grid-cols-four justify-between gap-y-12 max-[1200px]:grid-cols-three max-[920px]:grid-cols-two max-[660px]:grid-cols-one max-[660px]:justify-center min-[1600px]:grid-cols-five">
        {filteredCountries
          ? filteredCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                flags={country.flags.png}
                name={country.name.common}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
              />
            ))
          : Array.from({ length: 50 }).map((_, index) => (
              <LoaderSkeletonPrimary key={index} />
            ))}
      </div>
    </main>
  )
}
