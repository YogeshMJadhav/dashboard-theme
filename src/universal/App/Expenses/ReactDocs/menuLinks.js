import * as pages from './pages'

const links = [
  {
    name: 'Components',
    links: [
      {
        text: 'Avatar',
        to: '/avatar',
        component: pages.Avatar,
      },
      {
        text: 'Button',
        to: '/button',
        component: pages.Button,
      },
      {
        text: 'Checkbox',
        to: '/checkbox',
        component: pages.Checkbox,
      },
      {
        text: 'Chart',
        to: '/chart',
        component: pages.Chart,
      },
      {
        text: 'ChartLineBlank',
        to: '/chartLineBlank',
        component: pages.ChartLineBlank,
      },
      {
        text: 'CodeHighlight',
        to: '/code-highlight',
        component: pages.CodeHighlight,
      },
      {
        text: 'CodeHighlightContainer',
        to: '/code-highlight-container',
        component: pages.CodeHighlightContainer,
      },
      {
        text: 'Divider',
        to: '/divider',
        component: pages.Divider,
      },
      {
        text: 'Dropdown',
        to: '/dropdown',
        component: pages.Dropdown,
      },
      {
        text: 'DropdownItem',
        to: '/dropdown-item',
        component: pages.DropdownItem,
      },
      {
        text: 'EmojiHeadline',
        to: '/emoji-headline',
        component: pages.EmojiHeadline,
      },
      {
        text: 'Headline',
        to: '/headline',
        component: pages.Headline,
      },
      {
        text: 'HeadlineDesc',
        to: '/headline-desc',
        component: pages.HeadlineDesc,
      },
      {
        text: 'Input',
        to: '/input',
        component: pages.Input,
      },
      {
        text: 'NavLink',
        to: '/nav-link',
        component: pages.NavLink,
      },
      {
        text: 'NavLinkSecondary',
        to: '/nav-link-secondary',
        component: pages.NavLinkSecondary,
      },
      {
        text: 'NavLinkTwo',
        to: '/nav-link-two',
        component: pages.NavLinkTwo,
      },
      {
        text: 'NavSection',
        to: '/nav-section',
        component: pages.NavSection,
      },
      {
        text: 'NavSectionTitle',
        to: '/nav-section-title',
        component: pages.NavSectionTitle,
      },
      {
        text: 'OutsideClickHandler',
        to: '/outside-click-handler',
        component: pages.OutsideClickHandler,
      },
      {
        text: 'ProgressBar',
        to: '/progress-bar',
        component: pages.ProgressBar,
      },
      {
        text: 'Select',
        to: '/select',
        component: pages.Select,
      },
      {
        text: 'Uikon',
        to: '/uikon',
        component: pages.Uikon,
      },
      {
        text: 'Widget',
        to: '/widget',
        component: pages.Widget,
      },
      {
        text: 'WidgetContent',
        to: '/widget-content',
        component: pages.WidgetContent,
      },
      {
        text: 'WidgetDoc',
        to: '/widget-doc',
        component: pages.WidgetDoc,
      },
      {
        text: 'WidgetTable',
        to: '/widget-table',
        component: pages.WidgetTable,
      },
    ],
  },
]

export const getFlattenLinks = () => links.reduce((nextArray, nextItem) => [
  ...nextArray,
  ...nextItem.links,
], [])

export default links
