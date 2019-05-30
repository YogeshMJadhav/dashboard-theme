import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
} from '@components'

import {
  UikLayoutMain,
} from '@containers'


const DocsProjectStructure = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          Project Structure
        </h1>
        <p>
          {`With access to code, you have pure HTML & CSS available as well as React Components.
          React components are avaiable as a source code if you need to modify the code.
          You need to build your prototype as quick as possible? Import compiled library instead!`}
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <ul className="no-style">
          <li>
            /root
          </li>
          <ul className="no-style">
            <li>
              <strong className="color-green">
                /html
              </strong>
              {' '}
              <i>
                (source for plain html/css code),
                {' '}
                <Link to="/docs/start/html-css">
                  read more →
                </Link>
                )
              </i>
            </li>
            <ul className="no-style">
              <li>
                /css
              </li>
              <li>
                /images
              </li>
              <li>
                /html
              </li>
            </ul>
            <li>
              <strong className="color-blue">
                /repository
              </strong>
              {' '}
              <i>
                (React source code & repository, including this documentation,
                {' '}
                <Link to="/docs/start/source-code">
                  read more →
                </Link>
                )
              </i>
            </li>
            <ul className="no-style">
              <li>
                /build
              </li>
              <li>
                /public
              </li>
              <li>
                /src
              </li>
              <ul className="no-style">
                <li>
                  /client
                </li>
                <li>
                  /server
                </li>
                <li>
                  /universal
                </li>
                <li>
                  /index.js
                </li>
              </ul>
              <li>
                /.babelrc
              </li>
              <li>
                /.eslintrc.js
              </li>
              <li>
                /.flowconfig
              </li>
              <li>
                /jsconfig.json
              </li>
              <li>
                /package.json
              </li>
              <li>
                /razzle.config.json
              </li>
              <li>
                /yarn.lock
              </li>
            </ul>
            <li>
              <strong className="color-orange">
                /dist
              </strong>
              {' '}
              <i>
                (Compiled React files),
                {' '}
                <Link to="/docs/start/compiled">
                  read more →
                </Link>
                )
              </i>
            </li>
            <ul className="no-style">
              <li>
                /analyticsComponents.js
              </li>
              <li>
                /baseComponents.js
              </li>
              <li>
                /composedComponents.js
              </li>
              <li>
                /containers.js
              </li>
            </ul>
          </ul>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsProjectStructure
