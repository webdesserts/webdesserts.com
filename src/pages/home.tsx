import * as React from 'react'
import { Page, PageProps } from './page'
import { Link } from '@reach/router'
import styled from 'styled-components'

let Block = styled(Page)`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }

  li + li::before {
    content: "+";
    display: inline-block;
    margin: 0 4px;
  }

  & > *+* {
    margin-top: 16px;
  }
`

export function Home(props: PageProps) {
  return (
    <Block title="Web Desserts" subPage={props.children}>
      <ul>
        <li><a href="https://twitter.com/webdesserts">Twitter</a></li>
        <li><a href="https://github.com/webdesserts">Github</a></li>
        <li><a href="https://twitch.tv/webdesserts">Twitch</a></li>
      </ul>
      <p>Hi! You have arrived at the website for a web designer/developer named <strong>Michael Mullins</strong>.</p>
      <p>I currently dabble in the Dat & Beaker Browser ecosystems. I also occasionally dabble with Color Spaces, SVG, and React. If you're new to any of this or you just have questions, feel free to reach out!</p>
      <nav>
        <Link to="blog">Blog</Link>
      </nav>
    </Block>
  )
}