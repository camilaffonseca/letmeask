import {
  PRODUCTION_ENVIRONMENT_NAMES,
  VALID_ENVIRONMENT_NAMES,
  DEFAULT_PRODUCTION_ENVIRONMENT_NAME,
} from 'constants/environment'

export const { NEXT_PUBLIC_API_URL } = process.env
export const { NEXT_PUBLIC_SENTRY_DSN } = process.env
export const { NEXT_PUBLIC_API_KEY } = process.env
export const { NEXT_PUBLIC_AUTH_DOMAIN } = process.env
export const { NEXT_PUBLIC_DATABASE_URL } = process.env
export const { NEXT_PUBLIC_PROJECT_ID } = process.env
export const { NEXT_PUBLIC_STORAGE_BUCKET } = process.env
export const { NEXT_PUBLIC_MESSAGING_SENDER_ID } = process.env
export const { NEXT_PUBLIC_APP_ID } = process.env

export const getNodeEnv = () => ({
  NODE_ENV: process.env.NODE_ENV,
})

export const validEnvNameOrProduction = (envName: string) => {
  if (VALID_ENVIRONMENT_NAMES.includes(envName)) {
    return envName
  }

  return DEFAULT_PRODUCTION_ENVIRONMENT_NAME
}

export const isProductionMode = (): boolean =>
  PRODUCTION_ENVIRONMENT_NAMES.includes(validEnvNameOrProduction(process.env.NODE_ENV))
