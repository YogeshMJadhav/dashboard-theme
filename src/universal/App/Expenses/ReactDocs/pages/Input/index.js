/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikInput,
  Uikon,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.childProps({
    prop: 'wrapperProps',
    desc: 'Wrapper properties',
  }),
  properties.node({
    prop: 'label',
  }),
  properties.node({
    prop: 'icon',
  }),
  {
    prop: 'clear',
    propType: 'Boolean',
    desc: 'Borderless',
  },
  properties.rest({
    desc: 'Other properties passed down to the input element. See the code for more information.',
  }),
]

const examples = [
  {
    rendered: (
      <UikInput
        label="Your Name"
        placeholder="e.g. John Wick"
      />
    ),
    code: `<UikInput
  label="Your Name"
  placeholder="e.g. John Wick"
/>`,
  },
  {
    rendered: (
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
        placeholder="Search for somebody"
      />
    ),
    code: `<UikInput
  clear
  icon={ (
    <Uikon>
      search_left
    </Uikon>
  ) }
  placeholder="Search for somebody"
/>`,
  },
]


const DocsInput = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikInput
        </h1>
        <p>
          Simply styled checkbox
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikInput Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsInput
