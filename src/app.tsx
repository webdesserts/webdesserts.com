import * as React from 'react'
import { Home, Projects, Community } from './routes'
import { Scene } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page } from './page'
import { GlobalStyles, ResetStyles } from './styles'

export function App() {
  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalStyles />
      <Scene>
        <BrowserRouter>
          <Page path="/" component={Home}>
            <Page path="/projects" component={Projects}/>
            <Page path="/community" component={Community} />
          </Page>
        </BrowserRouter>
      </Scene>
    </React.Fragment>
  );
}