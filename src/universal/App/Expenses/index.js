// Libraries
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Containers

import GettingStarted from './GettingStarted'
import ReactDocs from './ReactDocs'
import Support from './Support'
import Changelog from './Changelog'

import {
  UikContainerVertical,
} from '@containers'

//import Header from './components/Header'


const Docs = () => (
  <UikContainerVertical>
    <Switch>
      <Route
        component={ GettingStarted }
        path="/expenses"
      />
      <Route
        component={ ReactDocs }
        path="/docs/react"
      />
      <Route
        component={ Support }
        path="/docs/support"
      />
      <Route
        component={ Changelog }
        path="/docs/changelog"
      />
      <Redirect to="/expenses" />
    </Switch>
  </UikContainerVertical>
)

export default Docs
