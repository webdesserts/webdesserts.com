import * as React from 'react'
import styled from 'styled-components'
import { Home, Blog, BlogPost, PageProps } from './pages'
import { ViewPlane } from './view-plane'
import { Router, Link } from "@reach/router"

type ContentProps = {
  width: string,
  height: string
} & PageProps

let Content = styled.div<ContentProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: palevioletred;
`

let RoutesWrapper = styled(Router)`
  display: grid;
  justify-content: start;
  align-content: start;
  grid-auto-flow: column;
  grid-gap: 64px;

  [role="group"] {
    outline: 2px solid red !important;
    position: relative;
  }

  [role="group"]::before {
    display: block;
    content: "route group";
    color: red;
    opacity: .5;
    top: -20px;
    left: 0px;
    position: absolute;
  }
`

export class App extends React.Component {
  render() {
    return (
      <ViewPlane>
        <RoutesWrapper>
          <Home path="/">
            <Blog path="/blog">
              <BlogPost path=":postId" />
            </Blog>
          </Home>
        </RoutesWrapper>
      </ViewPlane>
    )
  }
}