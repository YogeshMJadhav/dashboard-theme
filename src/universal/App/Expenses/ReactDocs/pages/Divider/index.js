/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikDivider,
  UikWidget,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  {
    prop: 'direction',
    propType: 'String',
    defaultValue: 'horizontal',
    desc: '"horizontal" or "vertical"',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikWidget>
        Something
        <UikDivider />
        Splitted
      </UikWidget>
    ),
    code: `<UikWidget>
  Something
  <UikDivider />
  Splitted
</UikWidget>`,
  },
]


const DocsDivider = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikDivider
        </h1>
        <p>
          A simple divider, basically just a 1px grey line matching border color.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikDivider Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsDivider
