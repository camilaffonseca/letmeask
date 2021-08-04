import { BusinessSettings } from 'types/businessSettings'

const businessSettings: BusinessSettings = {
  theme: {
    colors: {
      black: '#29292E',
      white: '#FEFEFE',

      grayDark: '#737380',
      grayMedium: '#A8A8B3',
      grayLight: '#DBDCDD',

      purple: '#835AFD',
      pinkDark: '#E559F9',
      pinkLight: '#D67EE2',

      shadow: '#050206',
      danger: '#E73F5D',
      background: '#F8F8F8',

      hover: {
        purple: '#6F4BD8',
        danger: '#D73754',
        grayMedium: '#7E7E86',
        grayLight: '#CECECE',
      },
    },
  },
  businessInfo: {
    core: {
      useDefaultLoader: false,
    },
    businessData: {
      businessName: 'Letmeask',
    },
    imagePaths: {
      businessLogo: '/images/logos/letmeask.png',
    },
  },
}

export default businessSettings
