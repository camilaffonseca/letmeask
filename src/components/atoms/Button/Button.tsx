import styled, { css } from '@xstyled/styled-components'

interface ButtonProps {
  variant?: string
}

const Button = styled.buttonBox<ButtonProps>`
  width: 320px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ variant }) => {
    switch (variant) {
      case 'danger':
        return css`
          background-color: danger;
          color: white;

          &:hover {
            background-color: hover.danger;
          }
        `
      case 'outlined':
        return css`
          border-width: 2px;
          border-color: purple;
          border-style: solid;
          color: purple;
          background-color: white;

          &:hover {
            color: hover.purple;
            border-color: hover.purple;
          }
        `
      case 'cancel':
        return css`
          background-color: grayLight;
          color: grayDark;

          &:hover {
            background-color: hover.grayLight;
          }
        `
      default:
        return css`
          background-color: purple;
          color: white;

          &:hover {
            background-color: hover.purple;
          }
        `
    }
  }}
`

export default Button
