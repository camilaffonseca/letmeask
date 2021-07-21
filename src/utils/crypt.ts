import { OBFUSCATED_TOKEN_PREFIX } from 'constants/crypt'

export const getObfuscatedToken = (token: string) =>
  `${OBFUSCATED_TOKEN_PREFIX}${btoa(token)}`

export const getUnobfuscatedToken = (token: string) => {
  if (!token || !token.startsWith(OBFUSCATED_TOKEN_PREFIX)) {
    return undefined
  }

  return `${atob(token.replace(OBFUSCATED_TOKEN_PREFIX, ''))}`
}
