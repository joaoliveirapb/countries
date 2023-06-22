interface CountryDetailsProps {
  label: string
  content: string | number
}

export function CountryDetails({ label, content }: CountryDetailsProps) {
  return (
    <p className="text-sm font-semibold">
      {label}: <span className="font-normal">{content}</span>
    </p>
  )
}
