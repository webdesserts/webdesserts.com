import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import * as Layouts from '../common/layouts'
import { colors, fonts } from '../styles'

let LinkList = styled.ul`
  margin-top: 8px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`

let Layout = styled(Layouts.Default)`
  li + li {
    margin-left: 8px;
  }
`

export function Home(props: RouteComponentProps<{}>) {
  return (
    <Layout title="Michael Mullins">
      <LinkList>
        <li><ButtonLink href="https://twitter.com/webdesserts">Twitter</ButtonLink></li>
        <li><ButtonLink href="https://github.com/webdesserts">Github</ButtonLink></li>
        <li><ButtonLink href="https://twitch.tv/webdesserts">Twitch</ButtonLink></li>
      </LinkList>
      <p>Welcome! I am a designer/developer who has been working with the web for the past 8 years. I currently dabble in the Dat & Beaker Browser ecosystems. I also occasionally dabble with Color Spaces, SVG, and React. If you're new to any of this or you just have questions, feel free to reach out!</p>
      <nav>
      </nav>
    </Layout>
  )
}

const ButtonLink = styled.a`
  ${fonts.heading_small}
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  text-decoration: none;
  transition: color 200ms ease;
  &::after {
    position: absolute;
    display: block;
    content: '';
    bottom: 2px;
    left: 0;
    height: 2px;
    width: 100%;
    transition: width 200ms ease;
    background-color: ${colors.primary};
    width: 24px;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover {
    color: ${colors.primary}
  }
`