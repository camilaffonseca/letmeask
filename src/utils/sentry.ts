/* eslint-disable no-console */
import {
  init,
  captureException as sentryCaptureException,
  flush,
  Exception,
} from '@sentry/nextjs'

import { NEXT_PUBLIC_SENTRY_DSN, isProductionMode } from 'utils/environment'

export const initSentry = () => {
  if (!isProductionMode()) {
    console.debug('[MONITORING] Sentry skipped.')

    return
  }

  if (!NEXT_PUBLIC_SENTRY_DSN) {
    console.error(
      '[MONITORING] Sentry not loaded. A valid DSN config could not be found.'
    )

    return
  }

  try {
    init({
      enabled: isProductionMode(),
      dsn: NEXT_PUBLIC_SENTRY_DSN,
    })
  } catch (error) {
    console.error(
      '[MONITORING] Sentry not loaded. An error was encountered when starting Sentry.',
      error
    )
  }
}

export const captureException = async (error: Error | Exception) => {
  if (isProductionMode()) {
    try {
      sentryCaptureException(error)

      const success = await flush(5000)

      if (!success) {
        throw new Error(
          `Flush pass: false. It may not have been possible to send exception data to Nexpy servers. Please report this bug! ${String(
            error
          )}`
        )
      }

      console.error(
        `Flush pass: ${success}`,
        'This exception was caught automatically and will be debugged.',
        'Your correction will be evaluated and contact support is not necessary.',
        error
      )
    } catch {
      console.error(
        '[MONITORING] It was not possible to send exception data for Nexpy servers. Please report this bug! ',
        error
      )
    }
  } else {
    console.error('[DEV_ERROR] ', error)
  }
}
