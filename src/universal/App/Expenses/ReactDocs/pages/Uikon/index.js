/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  Uikon,
  UikWidgetTable,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children({
    propType: 'String',
    desc: 'Icon name literal',
  }),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <Uikon>
        help
      </Uikon>
    ),
    code: `<Uikon>
  help
</Uikon>`,
  },
]

const icons = [
  'help',
  'add',
  'check',
  'trending_down',
  'trending_up',
  'star',
  'star',
  'message',
  'send_round',
  'inbox_paper_round',
  'search_left',
  'settings',
  'love',
  'love',
  'edit',
  'multitasking',
  'gallery_grid_view',
  'home',
  'profile_round',
  'profile_plus_round',
  'clock',
  'container',
  'globe_network',
  'calendar',
  'stats',
  'money_round',
  'cloud_up',
  'image_picture',
  'camera',
  'desktop',
  'phone',
]

const DocsUikon = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          Uikon
        </h1>
        <p>
          Uikon has a icon class that imports packed icons in icon font supporting font literals.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Uikon Example
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          List of Icons
        </h2>
      </UikWidgetContent>
      <UikWidgetTable>
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>
              Icon literal
            </th>
          </tr>
        </thead>
        <tbody>
          {
            icons.map(icon => (
              <tr key={ icon }>
                <td>
                  <Uikon>
                    {icon}
                  </Uikon>
                </td>
                <td>
                  {icon}
                </td>
              </tr>
            ))
          }
        </tbody>

      </UikWidgetTable>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsUikon
