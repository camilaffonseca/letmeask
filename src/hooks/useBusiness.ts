import { useContext } from 'react'

import { BusinessInfoContext } from 'contexts/BusinessInfoContext'

const useBusiness = () => {
  const contextValue = useContext(BusinessInfoContext)

  if (contextValue === undefined) {
    throw new Error(
      'useBusiness must be used within a BusinessInfoProvider from contexts.'
    )
  }

  return contextValue
}

export default useBusiness
