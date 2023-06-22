import { BorderCountry } from '@/components/BorderCountry'
import { CountryDetails } from '@/components/CountryDetails'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CountryProps {
  params: {
    slug: string
  }
}

export default function Country({ params }: CountryProps) {
  return (
    <main className="min-h-screen bg-neutral-50 px-16 py-10 dark:bg-blue-950">
      <div className="flex">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-sm font-light shadow-md dark:bg-blue-900"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="mt-16 flex justify-between">
        <div>
          <Image
            src="https://flagcdn.com/jo.svg"
            alt="bandeira"
            width={560}
            height={404}
            className="shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-semibold">Brazil</h1>
          <div className="flex gap-40">
            <div className="flex flex-col gap-2">
              <CountryDetails label="Native Name" content="Brasil" />
              <CountryDetails label="Population" content="11.319.511" />
              <CountryDetails label="Region" content="America" />
              <CountryDetails label="Sub Region" content="America" />
              <CountryDetails label="Capital" content="Brasília" />
            </div>
            <div className="flex flex-col gap-2">
              <CountryDetails label="Top Level Domain" content="br" />
              <CountryDetails label="Currencies" content="Real" />
              <CountryDetails label="Languages" content="Portuguese" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Border Countries:</span>
            <div className="flex gap-1">
              <BorderCountry content="France" />
              <BorderCountry content="Germany" />
              <BorderCountry content="Netherlands" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
