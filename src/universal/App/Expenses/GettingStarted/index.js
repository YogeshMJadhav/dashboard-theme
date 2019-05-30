import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import {
  UikContainerHorizontal,
  UikContainerVertical,
  UikLayoutMain
} from '@containers'
import Header from '@shared/components/Header'
import Navigation from '@shared/components/Navigation'

import Menu from './components/Menu'

import * as pages from './pages'


const DocsGettingStarted = () => (
  <UikContainerHorizontal>
    <Navigation />
    <UikContainerVertical>
      <Header />
         <UikLayoutMain>
          <Switch>
            <Route
              component={ pages.ProjectStructure }
              path="/expenses"
            />
            <Route
              component={ pages.ReactCompiled }
              path="/docs/start/compiled"
            />
            <Route
              component={ pages.ReactStack }
              path="/docs/start/stack"
            />
            <Route
              component={ pages.ReactSource }
              path="/docs/start/source-code"
            />
            <Route
              component={ pages.HtmlCss }
              path="/docs/start/html-css"
            />
            <Redirect to="/expenses" />
          </Switch>
        </UikLayoutMain>
    </UikContainerVertical>
    {/* <Menu /> */}
    
  </UikContainerHorizontal>
)

export default DocsGettingStarted
