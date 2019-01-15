import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainWrapper from 'components/MainWrapper'
import Home from 'components/Home'
import Register from 'components/Register'
import routes from 'config/routes'

export default function App () {
  return (
    <MainWrapper>
      <Switch>
        <Route
          path={routes.register}
          component={Register}
        />
        <Route
          path={routes.index}
          component={Home}
        />
      </Switch>
    </MainWrapper>
  )
}
