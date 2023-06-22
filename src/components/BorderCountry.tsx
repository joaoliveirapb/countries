interface BorderCountryProps {
  content: string
}

export function BorderCountry({ content }: BorderCountryProps) {
  return (
    <span className="rounded-md border bg-white px-3 py-1 text-sm dark:border-blue-950 dark:bg-blue-900">
      {content}
    </span>
  )
}
