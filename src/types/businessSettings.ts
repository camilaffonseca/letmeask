import { Theme } from 'types/theme'

export type BusinessInfo = {
  core: {
    useDefaultLoader: boolean
  }
  businessData: {
    businessName: string
  }
  imagePaths: {
    businessLogo: string
  }
}

export type BusinessSettings = {
  theme: Theme
  businessInfo: BusinessInfo
}
