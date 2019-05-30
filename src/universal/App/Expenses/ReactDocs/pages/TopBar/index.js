/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikCheckbox,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.rest({
    desc: 'Other properties passed down to the input element. See the code for more information.',
  }),
]

const examples = [
  {
    rendered: (
      <UikCheckbox label="Check me" />
    ),
    code: '<UikCheckbox label="Check me" />',
  },
  {
    rendered: (
      <UikCheckbox
        defaultChecked
        label="Check me"
        name="is_hooman"
      />
    ),
    code: `// other properties goes to input element directly
<UikCheckbox
  defaultChecked
  label="Check me"
  name="is_hooman"
/>`,
  },
]


const UikTopBar = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikCheckbox
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
          UikCheckbox Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default UikTopBar
