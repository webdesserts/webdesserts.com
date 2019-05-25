import * as React from 'react'
import styled from 'styled-components'
import { Home, Blog, BlogPost } from './routes'
import { Scene, Point } from './scene'
import { BrowserRouter } from "react-router-dom"
import { Page, Offset } from './page'

export class App extends React.Component {
  state: Point = { x: 0, y: 0 }

  handleNavigate = (offset: Offset) => {
    let x = offset.left + offset.width / 2 - window.document.documentElement.offsetWidth / 2
    this.setState({ x, y: 0 })
  }

  render() {
    let { x, y } = this.state

    return (
      <Scene x={x} y={y}>
        <BrowserRouter>
          <Page path="/" component={Home} onNavigate={this.handleNavigate}>
            <Page path="/blog" component={Blog} onNavigate={this.handleNavigate}>
              <Page path="/blog/:postId" component={BlogPost} onNavigate={this.handleNavigate} />
            </Page>
          </Page>
        </BrowserRouter>
      </Scene>
    )
  }
}