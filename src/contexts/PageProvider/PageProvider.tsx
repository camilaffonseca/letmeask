import { ReactNode } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'
import merge from 'lodash/merge'

import { BusinessInfoProvider } from 'contexts/BusinessInfoContext'
import { LocaleProvider } from 'contexts/LocaleContext'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'

import { BusinessInfo } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'
import { PageProps } from 'types/pageProps'
import { Theme } from 'types/theme'

import defaultTheme from 'theme/defaultTheme'
import GlobalStyle from 'theme/globalStyle'

import userSettingsMock from 'mocks/businessSettings'

type DynamicPageProviderProps = {
  children: ReactNode
  theme: Theme
  locale: LocaleKeys
  businessInfo: BusinessInfo
}

const DynamicPageProvider = ({
  children,
  theme,
  locale,
  businessInfo,
  ...props
}: DynamicPageProviderProps) => (
  <BusinessInfoProvider
    businessInfo={merge({}, defaultBusinessInfo, businessInfo)}
    {...props}
  >
    <LocaleProvider locale={locale}>
      <ThemeProvider theme={merge({}, defaultTheme, theme)}>{children}</ThemeProvider>
    </LocaleProvider>
  </BusinessInfoProvider>
)

const PageProviderWrapper = ({ children, currentLocale, ...props }: PageProps) => {
  const businessSettings = userSettingsMock

  return (
    <DynamicPageProvider
      theme={businessSettings.theme}
      locale={currentLocale}
      businessInfo={businessSettings.businessInfo}
      {...props}
    >
      <GlobalStyle />
      {children}
    </DynamicPageProvider>
  )
}

export default PageProviderWrapper
