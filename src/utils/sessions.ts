import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { AUTHORIZATION_COOKIE_NAME, AUTHORIZATION_COOKIE_MAX_AGE } from 'constants/auth'
import { getUnobfuscatedToken, getObfuscatedToken } from 'utils/crypt'

import { NookiesNextContext } from 'types/nextContext'

export const getAuthTokenOrUndefined = (context?: NookiesNextContext) => {
  const { [AUTHORIZATION_COOKIE_NAME]: obfuscatedToken } = parseCookies(context)
  const unobfuscatedToken = getUnobfuscatedToken(obfuscatedToken)

  return unobfuscatedToken
}

export const writeSessionCookie = (cookieValue: string) => {
  setCookie(undefined, AUTHORIZATION_COOKIE_NAME, getObfuscatedToken(cookieValue), {
    maxAge: AUTHORIZATION_COOKIE_MAX_AGE,
  })
}

export const clearCurrentSessionCookie = () => {
  destroyCookie(undefined, AUTHORIZATION_COOKIE_NAME)
}
