import { AppProps as NextAppProps } from 'next/app'

import { Head } from 'components/common'

import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()
interface AppProps extends NextAppProps {
  err: unknown
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <>
    <Head />
    <Component {...pageProps} err={err} />
  </>
)

export default App
