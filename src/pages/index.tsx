import { GetStaticProps } from 'next'

import { SignIn } from 'views'

import PageProvider from 'contexts/PageProvider'
import { getDefaultStaticProps } from 'utils/defaultServerSidePropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageProvider currentLocale={currentLocale} {...props}>
    <SignIn />
  </PageProvider>
)

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...getDefaultStaticProps(context),
    },
  }
}

export default Page
