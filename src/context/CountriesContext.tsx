'use client'

import { api } from '@/services/api'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

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

interface CountriesContextProps {
  countries: CountriesProps[]
  setCountries: Dispatch<SetStateAction<any[]>>
  countriesIsFiltered: boolean
  getCountries: () => Promise<void>
  filterByRegion: (region: string) => Promise<void>
  filterIsOpen: boolean
  setFilterIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CountriesContext = createContext<CountriesContextProps>({
  countries: [],
  setCountries: () => {},
  countriesIsFiltered: false,
  getCountries: async () => {},
  filterByRegion: async () => {},
  filterIsOpen: false,
  setFilterIsOpen: () => {},
})

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountriesProps[]>([])
  const [countriesIsFiltered, setCountriesIsFiltered] = useState<boolean>(false)
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false)

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
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
