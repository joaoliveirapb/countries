'use client'

import { BorderCountry } from '@/components/BorderCountry'
import { CountryDetails } from '@/components/CountryDetails'
import { api } from '@/services/api'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CountryPageProps {
  params: {
    slug: string
  }
}

interface CountryProps {
  flags: {
    svg: string
    alt: string
  }
  name: {
    common: string
    nativeName?: Record<
      string,
      {
        common: string
      }
    >
  }
  currencies?: Record<
    string,
    {
      name: string
    }
  >
  languages?: Record<string, string>
  tld: string
  population: number
  region: string
  subregion?: string
  capital?: string
  borders?: string[]
}

export default function Country({ params }: CountryPageProps) {
  const [country, setCountry] = useState<CountryProps[]>([])

  useEffect(() => {
    getCounty(params.slug)
  }, [params.slug])

  async function getCounty(country: string) {
    try {
      const response = await api.get(`/name/${country}`)
      const data = response.data
      setCountry(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(country)

  return (
    <main className="bg-neutral-50 px-16 py-10 dark:bg-blue-950">
      <div className="flex">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-sm font-light shadow-md dark:bg-blue-900"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {country.map((item) => (
        <div key={item.name.common} className="mt-16 flex justify-between">
          <div>
            <Image
              src={item.flags.svg}
              alt={item.flags.alt}
              width={560}
              height={404}
              className="rounded-md shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-semibold">{item.name.common}</h1>
            <div className="flex gap-40">
              <div className="flex flex-col gap-2">
                <CountryDetails
                  label="Native Name"
                  content={
                    item.name.nativeName
                      ? item.name.nativeName[
                          Object.keys(item.name.nativeName)[0]
                        ].common
                      : item.name.common
                  }
                />
                <CountryDetails
                  label="Population"
                  content={item.population.toLocaleString()}
                />
                <CountryDetails label="Region" content={item.region} />
                {item.subregion ? (
                  <CountryDetails label="Sub Region" content={item.subregion} />
                ) : (
                  <CountryDetails label="Sub Region" content="Not Found" />
                )}
                {item.capital ? (
                  <CountryDetails label="Capital" content={item.capital} />
                ) : (
                  <CountryDetails label="Capital" content="Not Found" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <CountryDetails label="Top Level Domain" content={item.tld} />
                {item.currencies ? (
                  <CountryDetails
                    label="Currencies"
                    content={
                      item.currencies[Object.keys(item.currencies)[0]].name
                    }
                  />
                ) : (
                  <CountryDetails label="Currencies" content="Not Found" />
                )}
                {item.languages ? (
                  <CountryDetails
                    label="Languages"
                    content={Object.values(item.languages).join(', ')}
                  />
                ) : (
                  <CountryDetails label="Languages" content="Not Found" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Border Countries:</span>
              <div className="flex flex-wrap gap-1">
                {item.borders ? (
                  item.borders.map((border) => (
                    <BorderCountry key={border} content={border} />
                  ))
                ) : (
                  <span className="text-sm">Not Found</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
