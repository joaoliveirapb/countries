import Image from 'next/image'
import Link from 'next/link'
import { CountryDetails } from './CountryDetails'

interface CountryItemProps {
  flags: string
  name: string
  population: string | number
  region: string
  capital: string
}

export function CountryCard({
  flags,
  name,
  population,
  region,
  capital,
}: CountryItemProps) {
  return (
    <Link
      href={`/country/${name}`}
      className="flex flex-col rounded-md bg-white shadow-md hover:scale-[1.03] dark:bg-blue-900"
    >
      <Image
        src={flags}
        alt={`A Bandeira do(a) ${name}`}
        width={264}
        height={160}
        priority
        className="h-[160px] w-[264px] rounded-t-md shadow-sm"
      />
      <div className="px-5 py-5">
        <p className="text-xl font-bold">{name}</p>
        <div className="mt-3 space-y-1">
          <CountryDetails label="Population" content={population} />
          <CountryDetails label="Region" content={region} />
          <CountryDetails label="Capital" content={capital} />
        </div>
      </div>
    </Link>
  )
}
