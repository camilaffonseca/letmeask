import { useContext } from 'react'

import { AuthContext } from 'contexts/AuthContext'

const useAuth = () => {
  const contextValue = useContext(AuthContext)

  if (contextValue === undefined) {
    throw new Error('useAuth must be used within an AuthProvider from contexts.')
  }

  return contextValue
}

export default useAuth
