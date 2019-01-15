import React from 'react'
import FormRegister from 'components/FormRegister'

export default function Register (props) {
  return (
    <FormRegister 
      onSubmit={data => console.log(data) } 
    />
  )
}
