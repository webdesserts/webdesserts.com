import * as React from 'react'
import { Home, Blog, BlogPost } from './routes'
import { Scene, Point } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page, Offset } from './page'

export function App() {
  let [point, setPoint] = React.useState<Point>({ x: 0, y: 0 });

  function handleNavigate(offset: Offset) {
    let documentWidth = window.document.documentElement.offsetWidth
    let x = offset.left + offset.width / 2 - documentWidth / 2;
    setPoint({ x, y: 0 });
  }

  return (
    <Scene {...point}>
      <BrowserRouter>
        <Page path="/" component={Home} onNavigate={handleNavigate}>
          <Page path="/blog" component={Blog} onNavigate={handleNavigate}>
            <Page
              path="/blog/:postId"
              component={BlogPost}
              onNavigate={handleNavigate}
            />
          </Page>
        </Page>
      </BrowserRouter>
    </Scene>
  );
}