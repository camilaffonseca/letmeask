import { ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

export type PageProps = {
  currentLocale: LocaleKeys
  children?: ReactNode
}
