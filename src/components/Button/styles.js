import styled from 'styled-components'
import { prop } from 'styled-tools'
import { Link } from 'react-router-dom'

export const StyledButton = styled(Link)`
  display: block;
  width: 200px;
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  background-color: ${prop('theme.colors.gray')};
  text-align: center;
  font-size: 19px;
  color: ${prop('theme.colors.primary')};
  transition: .2s;
  text-decoration: none;
  outline: none;

  &:hover {
    background-color: ${prop('theme.colors.grayDark')};
  }
`
