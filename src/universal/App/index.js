import * as React from 'react'

// import { connect } from 'react-redux'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'

import {
  UikPageFade,
} from '@containers'

import cls from './App.scss'

import routeMap from './routeMap'

// @flow
type AppProps = {
  location: Object
}


@withRouter
export default class App extends React.PureComponent<AppProps> {
  render() {
    const { location, location: { pathname } } = this.props
    const key = pathname.slice('/')[0]
    return (
      <UikPageFade className={ cls.app }>
        <Switch
          key={ key }
          location={ location }
        >
          <Route
            component={ routeMap.Dashboard }
            path="/dashboard"
          />
          <Route
            component={ routeMap.Sell }
            path="/sell"
          />
          <Route
            component={ routeMap.Receipts }
            path="/receipts"
          />
          <Route
            component={ routeMap.Expenses }
            path="/expenses"
          />
          <Route
            component={ routeMap.Products }
            path="/products"
          />
          <Route
            component={ routeMap.Customers }
            path="/customers"
          />
          
           <Route
            component={ routeMap.Settings }
            path="/"
          />
          <Redirect to="/" />
        </Switch>
      </UikPageFade>
    )
  }
}
