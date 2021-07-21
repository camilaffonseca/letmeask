import { defaultTheme as xStyledDefaultTheme } from '@xstyled/styled-components'
import merge from 'lodash/merge'

import { Theme } from 'types/theme'

const defaultTheme: Theme = {
  colors: {
    black: '#28262C',
    white: '#F9F5FF',

    primary: '#9855FF',
    secondary: '#5C50FF',
    tertiary: '#4AC8FF',
  },
}

export default merge({}, xStyledDefaultTheme, defaultTheme)
