import React from 'react'
import Button from 'components/Button'
import { Wrapper } from './styles'
import routes from 'config/routes'

export default function Home () {
  return (
    <Wrapper>
      <Button to={routes.register}>
        Cadastro
      </Button>
    </Wrapper>
  )
}
