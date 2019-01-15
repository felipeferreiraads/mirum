import React from 'react'
import ReactSelect from 'react-select'
import { Container } from './styles'

function Select ({ simpleValue, ...props }) {
  const simpleValueProps = () => ({
    onChange: option => {
      props.onChange(option ? option.value : option)
    },

    value: props.options.find(o => o.value === props.value)
  })

  return (
    <Container>
      <ReactSelect
        classNamePrefix='react-select'
        placeholder='Selecione...'
        noOptionsMessage={() => 'Sem opções'}
        {...props}
        {...(simpleValue ? simpleValueProps() : null)}
      />
    </Container>
  )
}

export default Select
