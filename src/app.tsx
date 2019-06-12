import * as React from 'react'
import { Home, Projects, Community } from './routes'
import { Scene } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page } from './page'
import { GlobalStyles, ResetStyles } from './styles'
import styled from 'styled-components'

let AppScene = styled(Scene)`
  padding-top: 64px;
`


export function App() {
  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalStyles />
      <AppScene>
        <BrowserRouter>
          <Page path="/" component={Home}>
            <Page path="/projects" component={Projects}/>
            <Page path="/community" component={Community} />
          </Page>
        </BrowserRouter>
      </AppScene>
    </React.Fragment>
  );
}