import { GetServerSidePropsContext, Redirect } from 'next'

import { DEFAULT_LOGIN_PAGE_REDIRECT_PATH } from 'constants/auth'
import { getAuthTokenOrUndefined } from 'utils/sessions'

import { WithAuthReturn } from 'types/auth'

export const withAuth = (
  context: GetServerSidePropsContext,
  withAuthReturn: WithAuthReturn,
  customAuthRedirect?: Redirect
) => {
  const token = getAuthTokenOrUndefined(context)

  if (!token) {
    if (customAuthRedirect) {
      return {
        redirect: customAuthRedirect,
      }
    }

    return {
      redirect: {
        destination: DEFAULT_LOGIN_PAGE_REDIRECT_PATH,
        permanent: false,
      },
    }
  }

  return withAuthReturn
}
