import * as React from 'react'

import { NavLink } from 'react-router-dom'

//import * as images from '@exampleAssets'

import {

  UikNavLinkTwo,
  UikNavLinkTwoContainer,
  UikTopBar,
  UikTopBarSection,
  Uikon,
  UikDivider,
} from '@components'

import {
  UikNavPanel,
  UikContainerVertical,
  UikScrollArea,
} from '@containers'


const menuLinks = [
  {
    text: 'Dashboard',
    icon: (
      <Uikon>
        gallery_grid_view
      </Uikon>
    ),
    to: '/dashboard'
  },
  {
    text: 'Sell',
    icon: (
      <Uikon>
        money_round
      </Uikon>
    ),
    to: '/sell'
  },
  {
    text: 'Receipts',
    icon: (
      <Uikon>
        inbox_paper_round
      </Uikon>
    ),
    to: '/receipts'
  },
  {
    text: 'Expenses',
    icon: (
      <Uikon>
        money_round
      </Uikon>
    ),
    to: '/expenses'
  },
  {
    text: 'Products',
    icon: (
      <Uikon>
        container
      </Uikon>
    ),
    to: '/products'
  },
  {
    text: 'Customers',
    icon: (
      <Uikon>
        profile_round
      </Uikon>
    ),
    to: '/customers'
  },
]


const AnalyticsNavigation = () => (
  <UikNavPanel>
    <UikContainerVertical>

      <UikTopBar center>
        <UikTopBarSection>
          <Uikon>
              home
          </Uikon>
        </UikTopBarSection>
      </UikTopBar>

      <UikScrollArea>
        {/* <UikNavUser
          imgUrl={ images.a21 }
          name="Martha Blair"
          textTop="Art Director"
        /> */}
        <UikDivider />
        <UikNavLinkTwoContainer>
          {
            
            menuLinks.map(link => (
              <UikNavLinkTwo
                key={ link.text }
                //className={ link.text === 'Dashboard' ? 'active' : null }
                activeClassName="active"
                Component={ NavLink }
                exact
                highlighted
                icon={ link.icon }
                to={ `${link.to}` }
              >
                {link.text}
              </UikNavLinkTwo>
              
            ))
          }
        </UikNavLinkTwoContainer>

  
      </UikScrollArea>
    </UikContainerVertical>
  </UikNavPanel>

)

export default AnalyticsNavigation
