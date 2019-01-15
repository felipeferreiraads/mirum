import styled from 'styled-components'
import { prop } from 'styled-tools'
import View from 'components/View'

const Base = View.filter([
  'focused',
  'invalid',
  'valid'
])

export const Container = styled.div`
  position: relative;
`

export const Append = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  height: calc(100% - 4px);
  padding: 0 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  
  > * + * {
    margin-left: 5px;
  }
`

export const InputStyled = styled(Base)`
  display: block;
  width: 100%;
  font-family: ${prop('theme.fonts.primary')};
  font-size: 16px;
  border: 2px solid ${prop('theme.colors.grayForm')};
  border-radius: 3px;
  background-color: #fff;
  padding: 0 10px;
  height: 40px;

  &:focus {
    border-color: ${prop('theme.colors.primary')};
  }

  &[disabled] {
    cursor: not-allowed;
  }
`
