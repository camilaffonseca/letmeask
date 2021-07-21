import { createContext, ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

type LocaleProviderProps = {
  locale: LocaleKeys
  children: ReactNode
}

export const LocaleContext = createContext('pt-BR' as LocaleKeys)

export const LocaleProvider = ({ locale, children, ...props }: LocaleProviderProps) => (
  <LocaleContext.Provider value={locale} {...props}>
    {children}
  </LocaleContext.Provider>
)
