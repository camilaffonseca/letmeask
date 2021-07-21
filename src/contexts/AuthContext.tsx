import { useRouter } from 'next/router'
import { createContext, useState, useEffect, ReactNode } from 'react'

import useSWR from 'swr'

import { DEFAULT_LOGIN_PAGE_REDIRECT_PATH } from 'constants/auth'
import { nexpyClientSideApi } from 'providers'
import { signInService, revalidateUserService } from 'services/auth'
import {
  clearCurrentSessionCookie,
  getAuthTokenOrUndefined,
  writeSessionCookie,
} from 'utils/sessions'

import { User, AuthContextValue, SignIn } from 'types/auth'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const unobfuscatedToken = getAuthTokenOrUndefined()

  const isAuthenticated = !!user

  const {
    data: revalidatedUserData,
    error: userRevalidationError,
    isValidating,
  } = useSWR(
    () =>
      `swr/user/revalidation|Token<${
        unobfuscatedToken || user?.auth.token || 'unknown'
      }>`,
    () => {
      if (unobfuscatedToken) {
        return revalidateUserService(unobfuscatedToken)
      }

      return undefined
    }
  )

  const router = useRouter()

  const registerSession = (userData: User) => {
    const currentToken = userData.auth.token

    nexpyClientSideApi.defaults.headers.Authorization = `Bearer ${currentToken}`

    writeSessionCookie(currentToken)
    setUser(userData)
  }

  const signIn = async ({ email, password }: SignIn) => {
    const { data: userData } = await signInService({
      email,
      password,
    })

    if (userData) {
      registerSession(userData)
    }
  }

  const signOut = (redirectPath?: string) => {
    if (unobfuscatedToken) {
      clearCurrentSessionCookie()
    }

    if (user) {
      setUser(null)
    }

    if (router.pathname !== DEFAULT_LOGIN_PAGE_REDIRECT_PATH) {
      router.push(redirectPath || DEFAULT_LOGIN_PAGE_REDIRECT_PATH)
    }
  }

  useEffect(() => {
    if (userRevalidationError) {
      signOut()
      return
    }

    if (revalidatedUserData) {
      setUser(revalidatedUserData.data)
    }
  }, [revalidatedUserData, userRevalidationError])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isRevalidatingUser: isValidating,
        signIn,
        signOut,
      }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  )
}
