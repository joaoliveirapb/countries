import Image from 'next/image'
import Link from 'next/link'

interface CountryItemProps {
  flags: string
  name: string
  population: number
  region: string
  capital: string
}

export function CountryItem({
  flags,
  name,
  population,
  region,
  capital,
}: CountryItemProps) {
  return (
    <Link
      href={`/country`}
      className="flex flex-col rounded-md bg-white shadow-md hover:scale-[1.03] dark:bg-blue-900"
    >
      <Image
        src={flags}
        alt="bandeira"
        width={264}
        height={160}
        className="h-[160px] w-[264px] rounded-t-md shadow-sm"
      />
      <div className="px-5 py-5">
        <p className="text-xl font-bold">{name}</p>
        <div className="mt-3 space-y-1 text-sm">
          <p className="font-semibold">
            Population: <span className="font-normal">{population}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
