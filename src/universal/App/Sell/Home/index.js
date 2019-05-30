import * as React from 'react'

import {
  UikHeadline,
  UikHeadlineDesc,
  UikWidgetHeader,
  UikWidget,
  UikWidgetBottomCta,
  UikWidgetLink,
  UikWidgetVideoPreview,
  UikWidgetVideoPreviewContainer,

  UikKnowledgeTopic,

} from '@components'

import {
  UikContainerVertical,
  UikContainerHorizontal,
  UikContent,
  UikLayoutMain,
} from '@containers'

import Header from '@shared/components/Header'
import Navigation from '@shared/components/Navigation'

import cls from './knowledge-home.scss'


// data
import topics from './assets/topics'
import sidebarNavigation from './assets/sidebarNavigation'
import sidebarVideos from './assets/sidebarVideos'


const KnowledgeHome = () => (
  
    
    <UikContainerHorizontal>
      <Navigation />
      <UikContainerVertical>
      <Header />
      <UikLayoutMain>
       
        <div>
          <UikContent>
            <UikHeadline>
              Knowledge Documentation
            </UikHeadline>
            <UikHeadlineDesc>
              Home / All Tutorials
            </UikHeadlineDesc>
          </UikContent>
          {
            topics.map(item => (
              <UikContent key={ item.title }>
                <UikKnowledgeTopic
                  key={ item.title }
                  { ...item }
                />
              </UikContent>
            ))
          }
        </div>
        <div>
          <UikContent>
            <UikWidget>
              <UikWidgetHeader>
              Navigation
              </UikWidgetHeader>
              {
              sidebarNavigation.map(item => (
                <UikWidgetLink
                  key={ item.title }
                  { ...item }
                />
              ))
            }
            </UikWidget>
          </UikContent>
          <UikContent>
            <UikWidget>
              <UikWidgetHeader>
              Popular Video Tutorials
              </UikWidgetHeader>
              <UikWidgetVideoPreviewContainer>
                {
                sidebarVideos.map(item => (
                  <UikWidgetVideoPreview
                    key={ item.title }
                    { ...item }
                  />
                ))
              }
              </UikWidgetVideoPreviewContainer>
              <UikWidgetBottomCta>
              View All Videos
              </UikWidgetBottomCta>
            </UikWidget>
          </UikContent>
        </div>
      </UikLayoutMain>
      </UikContainerVertical>
    </UikContainerHorizontal>
 
)

export default KnowledgeHome
