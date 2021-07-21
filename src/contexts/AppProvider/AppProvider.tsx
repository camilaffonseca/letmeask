import { ReactNode } from 'react'

import { AuthProvider } from 'contexts/AuthContext'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children, ...props }: AppProviderProps) => (
  <AuthProvider {...props}>{children}</AuthProvider>
)

export default AppProvider
