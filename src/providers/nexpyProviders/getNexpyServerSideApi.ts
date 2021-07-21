import getHTTPClient from 'providers/core/getHttpClient'

import { NookiesNextContext } from 'types/nextContext'

const getNexpyServerSideApi = (context: NookiesNextContext) => getHTTPClient(context)

export default getNexpyServerSideApi
