import * as React from 'react'

import { NavLink } from 'react-router-dom'

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavLink,
} from '@components'

import {
  UikNavPanel,
} from '@containers'

import menuLinks from '../../menuLinks'


const DocsMenu = () => (
  <UikNavPanel>
    {
      menuLinks.map(section => (
        <UikNavSection key={ section.name }>
          <UikNavSectionTitle>
            {section.name}
          </UikNavSectionTitle>
          {
          section.links.map(link => (
            <UikNavLink
              key={ link.text }
              activeClassName="active"
              Component={ NavLink }
              exact
              highlighted
              rightEl="→"
              to={ `/docs/react${link.to}` }
            >
              {link.text}
            </UikNavLink>
          ))
        }
        </UikNavSection>
      ))
    }
  </UikNavPanel>
)

export default DocsMenu
