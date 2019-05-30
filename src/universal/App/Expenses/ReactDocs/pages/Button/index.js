/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikButton,
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
  properties.className({
    prop: 'contentClassName',
    desc: 'classname for content wrapper inside button',
  }),
  properties.Component({
    defaultValue: '"button"',
  }),
  {
    prop: 'type',
    propType: 'String',
    required: false,
    defaultValue: '"button"',
    desc: 'Applicable for button',
  },
  {
    prop: 'xs',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders smaller button with height 30px',
  },
  {
    prop: 'lg',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders larger button with height 50px',
  },
  {
    prop: 'primary',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has blue color',
  },
  {
    prop: 'warning',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has orange color',
  },
  {
    prop: 'error',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has red color',
  },
  {
    prop: 'success',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has green color',
  },
  {
    prop: 'dark',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has black color with opacity .4',
  },
  {
    prop: 'clear',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has no background and no borders',
  },
  {
    prop: 'isLoading',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Will render loading state',
  },
  // icon properties
  {
    prop: 'icon',
    propType: 'React.node',
    required: false,
    defaultValue: 'null',
    desc: 'Renders icon on left side by default',
  },
  {
    prop: 'iconRight',
    propType: 'Boolean',
    required: false,
    defaultValue: 'null',
    desc: 'Renders icon on right side',
  },
  {
    prop: '...rest',
    propType: 'Object',
    required: false,
    desc: 'Other properties are passed down to the root element',
  },
]

const examples = [
  {
    rendered: (
      <UikButton>
        Example
      </UikButton>
    ),
    code: `<UikButton>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton success>
        Example
      </UikButton>
    ),
    code: `<UikButton success>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton primary>
        Example
      </UikButton>
    ),
    code: `<UikButton primary>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton warning>
        Example
      </UikButton>
    ),
    code: `<UikButton warning>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton error>
        Example
      </UikButton>
    ),
    code: `<UikButton error>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton dark>
        Example
      </UikButton>
    ),
    code: `<UikButton dark>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton clear>
        Example
      </UikButton>
    ),
    code: `<UikButton clear>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        primary
        xs
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary xs>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        lg
        primary
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary lg>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        isLoading
        primary
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary isLoading>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        icon={ (
          <span>
            →
          </span>
        ) }
        warning
      >
        Example
      </UikButton>
    ),
    code: `<UikButton
  icon={ (
    <span>
      →
    </span>
  ) }
  warning
>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        icon={ (
          <span>
            →
          </span>
        ) }
        iconRight
        warning
      >
        Example
      </UikButton>
    ),
    code: `<UikButton
  icon={ (
    <span>
      →
    </span>
  ) }
  iconRight
  warning
>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        Component="a"
        primary
      >
        Example
      </UikButton>
    ),
    code: `// rendered as <a ...>Example</a>
// you can use your components, e.g. MyCustomComponent
// and pass it as a Component prop.
<UikButton Component="a" primary>
  Example
</UikButton>`,
  },
]


const DocsButton = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikButton
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikButton Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsButton
