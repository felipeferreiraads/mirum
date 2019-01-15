import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  font-family: ${prop('theme.fonts.primary')};
  text-align: left;

  .react-select__control {
    min-height: 41px;
    border-width: 2px;
    border-color: ${prop('theme.colors.grayForm')};
    background-color: #fff;
    box-shadow: none;
  }

  .react-select__control.--is-focused {
      border-color: ${prop('theme.colors.primary')};
      box-shadow: none;
    }

  .react-select__placeholder {
    color: ${prop('theme.colors.text')};
  }
`
