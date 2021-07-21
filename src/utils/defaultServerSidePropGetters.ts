import { GetStaticPropsContext, GetServerSidePropsContext } from 'next'

import { DEFAULT_LOCALE_IDENTIFIER } from 'constants/locale'

export const getDefaultStaticProps = (context: GetStaticPropsContext) => {
  return {
    currentLocale: context.locale || context.defaultLocale || DEFAULT_LOCALE_IDENTIFIER,
  }
}

export const getDefaultServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    currentLocale: context.locale || context.defaultLocale || DEFAULT_LOCALE_IDENTIFIER,
  }
}
