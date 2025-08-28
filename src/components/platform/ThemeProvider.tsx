import { createContext, useContext } from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

const ThemeProviderContext = createContext<{
  theme: string | undefined
  setTheme: (theme: string) => void
}>({
  theme: undefined,
  setTheme: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}