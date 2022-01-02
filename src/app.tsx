import * as React from 'react'
import { Home, Projects, Community, Career, Resume } from './routes'
import { Scene } from './scene'
import { BrowserRouter, Redirect, Switch } from "react-router-dom"
import { Page } from './page'
import { GlobalStyles, ResetStyles } from '@webdesserts/ui'
import styled from 'styled-components'

let ScrollView = styled.div`
  padding-top: 40px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: start;
  justify-content: start;
  -webkit-overflow-scrolling: touch;

  @media print {
    padding-top: 0;
    overflow: visible;
  }
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
            <Switch>
              <Redirect from="/resume" to="/career/resume" />
              <Page path="/" component={Home}>
                <Page path="/projects" component={Projects} />
                <Page path="/community" component={Community} />
                <Page path="/career" component={Career}>
                  <Page path="/career/resume" component={Resume} />
                </Page>
              </Page>
            </Switch>
          </BrowserRouter>
        </AppScene>
      </ScrollView>
    </React.Fragment>
  );
}