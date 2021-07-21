import { NextPageContext, NextApiRequest } from 'next'

export type NookiesNextContext =
  | Pick<NextPageContext, 'req'>
  | {
      req: NextApiRequest
    }
