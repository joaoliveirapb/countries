import Image from 'next/image'

export function CountryItem() {
  return (
    <div className="flex flex-col rounded-md bg-white shadow-md dark:bg-blue-900">
      <Image
        src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
        alt="bandeira"
        width={264}
        height={160}
        className="rounded-t-md"
      />
      <div className="px-5 py-5">
        <p className="text-xl font-bold">Brazil</p>
        <div className="mt-3 space-y-1 text-sm">
          <p className="font-semibold">
            Population: <span className="font-normal">206.135.893</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">America</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-normal">Brasília</span>
          </p>
        </div>
      </div>
    </div>
  )
}
