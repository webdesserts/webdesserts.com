import * as React from 'react'
import { Home, Projects, Community } from './routes'
import { Scene } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page } from './page'
import { GlobalStyles, ResetStyles } from './styles'
import styled from 'styled-components'

let ScrollView = styled.div`
  padding-top: 40px;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  align-items: start;
  justify-content: start;
`;

let AppScene = styled(Scene)`
  padding: 24px;
  margin: 0 auto;
`

export function App() {
  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalStyles />
      <ScrollView>
        <AppScene>
          <BrowserRouter>
            <Page path="/" component={Home}>
              <Page path="/projects" component={Projects} />
              <Page path="/community" component={Community} />
            </Page>
          </BrowserRouter>
        </AppScene>
      </ScrollView>
    </React.Fragment>
  );
}