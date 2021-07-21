import { AxiosResponse } from 'axios'

import { User, SignIn } from 'types/auth'

const delayPromise = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

const userMock: User = {
  id: '1',
  auth: {
    token: 'LKNBOIPJKMBIUOKLJMKLOKML',
  },
  personalData: {
    firstName: 'Allan',
    lastName: 'Oliveira',
    fullName: 'Allan Oliveira',
    email: 'email@example.com',
    avatarUrl: 'https://github.com/AllanOliveiraM.png',
    birthDate: '2001-04-17',
    phoneNumber: '53997132377',
  },
  metadata: {
    isActive: true,
    userClass: 'admin',
    createdAtDate: '2021-05-23',
    lastLoginDate: '2021-06-27',
    preferredLanguage: 'pt',
  },
}

const RESOLVE_ALL = true

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signInMockRequest = async (data: SignIn) => {
  await delayPromise()

  return new Promise<AxiosResponse<User>>((resolve, reject) => {
    if (RESOLVE_ALL) {
      resolve({
        data: userMock,
        status: 200,
        statusText: 'OK',
        headers: '',
        config: {},
        request: '',
      })
    } else {
      reject(new Error('Invalid user.'))
    }
  })
}

export const recoverUserInfoMockRequest = async (token: string) => {
  await delayPromise()

  if (token !== userMock.auth.token) {
    throw new Error('Invalid Token.')
  }

  return new Promise<AxiosResponse<User>>((resolve, reject) => {
    if (RESOLVE_ALL) {
      resolve({
        data: userMock,
        status: 200,
        statusText: 'OK',
        headers: '',
        config: {},
        request: '',
      })
    } else {
      reject(new Error('Invalid user.'))
    }
  })
}
