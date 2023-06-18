'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={changeTheme}
      className="flex items-center gap-2 text-sm font-semibold"
    >
      {theme === 'light' ? (
        <>
          <Moon size={18} />
          Dark
        </>
      ) : (
        <>
          <Sun size={18} />
          Light
        </>
      )}{' '}
      Mode
    </button>
  )
}
