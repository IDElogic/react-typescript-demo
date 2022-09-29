import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  return (
  <div>
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  </div>
  )
}
