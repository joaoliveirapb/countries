'use client'

import { CountryCard } from '@/components/CountryCard'
import { Search } from '@/components/Search'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

interface CountriesProps {
  flags: {
    png: string
    alt: string
  }
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
}

export default function Home() {
  const [countries, setCountries] = useState<CountriesProps[]>([])

  async function getCountries() {
    try {
      const response = await api.get('/all')
      const data = response.data
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <main className="bg-neutral-50 px-16 py-10 dark:bg-blue-950 max-[490px]:px-4">
      <Search />
      <div className="mt-12 grid grid-cols-four justify-between gap-y-12 max-[1200px]:grid-cols-three max-[920px]:grid-cols-two max-[660px]:grid-cols-one max-[660px]:justify-center min-[1600px]:grid-cols-five">
        {countries.map((country) => (
          <CountryCard
            key={country.name.common}
            flags={country.flags.png}
            alt={country.flags.alt}
            name={country.name.common}
            population={country.population.toLocaleString()}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </main>
  )
}
