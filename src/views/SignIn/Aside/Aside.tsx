import styled from '@xstyled/styled-components'

import { desktopUp } from 'constants/breakpoints'

const Aside = styled.asideBox`
  background-color: purple;
  display: none;

  img {
    height: 50vh;
  }

  @media (min-width: ${desktopUp}) {
    flex: 3;
    height: 100vh;
    padding: 10vh 7%;
    display: unset;
    align-items: center;
  }
`

export default Aside
