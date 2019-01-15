import React from 'react'
import PropTypes from 'prop-types'
import { componentType } from 'types'
import { Container, InputStyled, Append } from './styles'

export default function Input ({ meta, append, ...props }) {
  return (
    <Container>
      <InputStyled
        {...props}
      />
      {append && (
        <Append>
          {append}
        </Append>
      )}
    </Container>
  )
}

Input.propTypes = {
  /** Component */
  component: componentType,

  /** Append elements to the input */
  append: PropTypes.element
}

Input.defaultProps = {
  component: 'input'
}
