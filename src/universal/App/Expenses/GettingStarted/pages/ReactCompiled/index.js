/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'


const ReactCompiled = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
        Compiled React Files
        </h1>
        <p>
          {'Include the lib.css file in your project. To import components, simply use '}
        </p>
        <p>
          <code>
            {'import { Component } from \'./path/to/lib.js'}
          </code>
        </p>
        <p>
        Compiled files are located in the /root/dist folder
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Files not included
        </h2>
        <p>
This is because these components are dependant on some large libraries and we don't want to include it in the compiled lib.js file. Feel free to copy the source code from /repo/src/universal/componentWrappers
        </p>

        <ol>
          <li>
UikChart
          </li>
          <li>
UikChartLineBlank
          </li>
          <li>
UikCodeHighlight
          </li>
          <li>
          UikCodeHighlightContainer
          </li>
          <li>
          UikWidgetChartSummarySmall
          </li>
        </ol>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Available Components
        </h2>

        <ol>
          <li>
UikContainerVertical
          </li>
          <li>
UikContainerHorizontal
          </li>
          <li>
UikContent
          </li>
          <li>
UikLayoutMain
          </li>
          <li>
UikNavPanel
          </li>
          <li>
UikScrollArea
          </li>
          <li>
UikPageFade
          </li>
          <li>
UikButton
          </li>
          <li>
UikSelect
          </li>
          <li>
UikInput
          </li>
          <li>
UikDivider
          </li>
          <li>
UikCheckbox
          </li>
          <li>
UikAvatar
          </li>
          <li>
Uikon
          </li>
          <li>
UikStarRating
          </li>
          <li>
UikTag
          </li>
          <li>
UikProgressBar
          </li>
          <li>
UikAvatarMenuContainer
          </li>
          <li>
UikEmojiHeadline
          </li>
          <li>
UikonText
          </li>
          <li>
UikDropdown
          </li>
          <li>
UikDropdownItem
          </li>
          <li>
UikTopBar
          </li>
          <li>
UikTopBarSection
          </li>
          <li>
UikTopBarLink
          </li>
          <li>
UikTopBarLinkContainer
          </li>
          <li>
UikTopBarTitle
          </li>
          <li>
UikTopBarMenuDivider
          </li>
          <li>
UikNavLink
          </li>
          <li>
UikNavLinkTwo
          </li>
          <li>
UikNavLinkSecondary
          </li>
          <li>
UikNavLinkTwoContainer
          </li>
          <li>
UikNavTitle
          </li>
          <li>
UikNavSection
          </li>
          <li>
UikNavSectionTitle
          </li>
          <li>
UikNavUser
          </li>
          <li>
UikTutorialList
          </li>
          <li>
UikTutorialListItem
          </li>
          <li>
UikHeadline
          </li>
          <li>
UikHeadlineDesc
          </li>
          <li>
UikKnowledgeTopic
          </li>
          <li>
UikonWrap
          </li>
          <li>
UikSocialHeader
          </li>
          <li>
UikSocialWidgetFriends
          </li>
          <li>
UikSocialWidgetAbout
          </li>
          <li>
UikWidget
          </li>
          <li>
UikWidgetBottomCta
          </li>
          <li>
UikWidgetHeader
          </li>
          <li>
UikWidgetLink
          </li>
          <li>
UikWidgetVideoPreview
          </li>
          <li>
UikWidgetVideoPreviewContainer
          </li>
          <li>
UikWidgetContent
          </li>
          <li>
UikWidgetDoc
          </li>
          <li>
UikWidgetTable
          </li>
          <li>
UikTabContainer
          </li>
          <li>
UikTabItem
          </li>

        </ol>

      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default ReactCompiled
