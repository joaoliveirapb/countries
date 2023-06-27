'use client'

import { api } from '@/services/api'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useDeferredValue,
  useEffect,
  useState,
} from 'react'

interface CountriesProps {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
}

interface CountriesContextProps {
  countries: CountriesProps[] | null
  setCountries: Dispatch<SetStateAction<CountriesProps[] | null>>
  countriesIsFiltered: boolean
  getCountries: () => Promise<void>
  filterByRegion: (region: string) => Promise<void>
  filterIsOpen: boolean
  setFilterIsOpen: Dispatch<SetStateAction<boolean>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  filteredCountries: CountriesProps[] | null
}

export const CountriesContext = createContext<CountriesContextProps>({
  countries: [],
  setCountries: () => {},
  countriesIsFiltered: false,
  getCountries: async () => {},
  filterByRegion: async () => {},
  filterIsOpen: false,
  setFilterIsOpen: () => {},
  search: '',
  setSearch: () => {},
  filteredCountries: [],
})

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountriesProps[] | null>(null)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [countriesIsFiltered, setCountriesIsFiltered] = useState<boolean>(false)
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const searchDeferred = useDeferredValue(search)

  async function getCountries() {
    try {
      const response = await api.get('/all')
      const data = response.data
      setCountries(data)
      setCountriesIsFiltered(false)
      setFilterIsOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function filterByRegion(region: string) {
    try {
      const response = await api.get(`/region/${region}`)
      const data = response.data
      setCountries(data)
      setCountriesIsFiltered(true)
      setFilterIsOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (countries) {
      const filtered = countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchDeferred.toLowerCase()),
      )
      setFilteredCountries(filtered)
    }
  }, [searchDeferred, countries])

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        countriesIsFiltered,
        getCountries,
        filterByRegion,
        filterIsOpen,
        setFilterIsOpen,
        search,
        setSearch,
        filteredCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
