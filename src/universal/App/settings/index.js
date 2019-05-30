// Libraries
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'


import {
  UikContainerVertical,
  UikContainerHorizontal,
  UikLayoutMain,
} from '@containers'


// components
import Header from '@shared/components/Header'
import Navigation from '@shared/components/Navigation'

const Settings = () => (
  
    
      <UikContainerHorizontal>
         <Navigation />
         <UikContainerVertical>
          <Header />
          <UikLayoutMain>
            <div>This is index of Settigns</div>
        </UikLayoutMain>
        </UikContainerVertical>
      </UikContainerHorizontal>
    
  
)

export default Settings
