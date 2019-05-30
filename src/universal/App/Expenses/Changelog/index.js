/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'


const DocsChangelog = () => (
  <UikLayoutMain contentCenter>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          v1.0.1
          {' '}
          <strong>
            Style fixes & SSR Fix
          </strong>
        </h1>
        <p>
          First minor release, mostly updating some styles and improved SSR codebase. All components compatible so no worries :)
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <ul>
          <li>
            Updated css styles for buttons
          </li>
          <li>
            Updated css styles for dropdowns
          </li>
          <li>
            Fixed UikCodeHighlight on SSR, updated documentation
          </li>
          <li>
            Nicer code for SSR
          </li>
          <li>
            Added OG Tags
          </li>
          <li>
            Added changelog :)
          </li>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsChangelog
