import { ReactNode } from 'react'
import { CountriesProvider } from './CountriesContext'
import { ThemesProvider } from './ThemeContext'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemesProvider>
      <CountriesProvider>{children}</CountriesProvider>
    </ThemesProvider>
  )
}
