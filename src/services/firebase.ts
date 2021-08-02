import fb from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

import {
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_AUTH_DOMAIN,
  NEXT_PUBLIC_DATABASE_URL,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_STORAGE_BUCKET,
  NEXT_PUBLIC_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_APP_ID,
} from 'utils/environment'

const firebaseConfigEnvs = [
  {
    envName: 'NEXT_PUBLIC_API_KEY',
    envValue: NEXT_PUBLIC_API_KEY,
  },
  {
    envName: 'NEXT_PUBLIC_AUTH_DOMAIN',
    envValue: NEXT_PUBLIC_AUTH_DOMAIN,
  },
  {
    envName: 'NEXT_PUBLIC_DATABASE_URL',
    envValue: NEXT_PUBLIC_DATABASE_URL,
  },
  {
    envName: 'NEXT_PUBLIC_PROJECT_ID',
    envValue: NEXT_PUBLIC_PROJECT_ID,
  },
  {
    envName: 'NEXT_PUBLIC_STORAGE_BUCKET',
    envValue: NEXT_PUBLIC_STORAGE_BUCKET,
  },
  {
    envName: 'NEXT_PUBLIC_MESSAGING_SENDER_ID',
    envValue: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  },
  {
    envName: 'NEXT_PUBLIC_APP_ID',
    envValue: NEXT_PUBLIC_APP_ID,
  },
]

const notPassedEnvs = firebaseConfigEnvs.filter(
  env => env.envValue?.includes('your_') || !env.envValue
)
const defaultErrorMessage =
  'Errors were found in the following environment variables, make sure you set them correctly: \n'
const errorMessage = notPassedEnvs?.reduce((acc, item) => {
  return `${acc} \n    Name: ${item.envName}, value: ${item.envValue || 'undefined'}`
}, defaultErrorMessage)

if (errorMessage && errorMessage !== defaultErrorMessage) {
  throw new Error(`${errorMessage} \n`)
}

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: NEXT_PUBLIC_DATABASE_URL,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
}

const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

export const auth = firebase.auth()
export const database = firebase.database()
