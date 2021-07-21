import { GetServerSideProps } from 'next'

import { Dashboard } from 'views'

import PageProvider from 'contexts/PageProvider'
import { withAuth } from 'utils/auth'
import { getDefaultServerSideProps } from 'utils/defaultServerSidePropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageProvider currentLocale={currentLocale} {...props}>
    <Dashboard />
  </PageProvider>
)

export const getServerSideProps: GetServerSideProps = async context => {
  return withAuth(context, {
    props: {
      ...getDefaultServerSideProps(context),
    },
  })
}

export default Page
