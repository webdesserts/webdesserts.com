import * as React from 'react'
import { Home, Projects } from './routes'
import { Scene, Point } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page, Offset } from './page'
import { GlobalStyles, ResetStyles } from './styles'

export function App() {
  let [point, setPoint] = React.useState<Point>({ x: 0, y: 0 });

  function handleNavigate(offset: Offset) {
    let documentWidth = window.document.documentElement.offsetWidth
    let x = offset.left + offset.width / 2 - documentWidth / 2;
    setPoint({ x, y: 0 });
  }

  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalStyles />
      <Scene {...point}>
        <BrowserRouter>
          <Page path="/" component={Home} onNavigate={handleNavigate}>
            <Page path="/projects" component={Projects} onNavigate={handleNavigate} />
          </Page>
        </BrowserRouter>
      </Scene>
    </React.Fragment>
  );
}