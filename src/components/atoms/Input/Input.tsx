import styled from '@xstyled/styled-components'

const Input = styled.inputBox`
  width: 320px;
  height: 50px;
  border-radius: 8px;
  border-color: grayMedium;
  border-width: 2px;
  color: grayMedium;
  font-size: 16px;
  padding: 13px 16px;
  outline: none;

  &:focus {
    border-color: hover.grayMedium;
    color: hover.grayMedium;
  }
`

export default Input
