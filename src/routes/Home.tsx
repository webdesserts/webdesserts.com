import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { NavList,ButtonLink, layouts, Heading, NavButtonRight } from '../common'

let LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`

let Layout = styled(layouts.Default)`
  max-width: 300px;
  li + li {
    margin-left: 8px;
  }
`

export function Home(props: RouteComponentProps<{}>) {
  let { isExact } = props.match
  let tabIndex = isExact ? 0 : -1

  return (
    <Layout>
      <Heading as="h1" size="large">Michael Mullins</Heading>
      <LinkList>
        <li><ButtonLink href="https://twitter.com/webdesserts" tabIndex={tabIndex}>Twitter</ButtonLink></li>
        <li><ButtonLink href="https://github.com/webdesserts" tabIndex={tabIndex}>Github</ButtonLink></li>
        <li><ButtonLink href="https://twitch.tv/webdesserts" tabIndex={tabIndex}>Twitch</ButtonLink></li>
      </LinkList>
      <p>Welcome! I am a designer/developer who has been working with the web for the past 8 years. I currently dabble in the Dat & Beaker Browser ecosystems. I also occasionally dabble with Color Spaces, SVG, and React. If you're new to any of this or you just have questions, feel free to reach out!</p>
      <NavList>
        <NavButtonRight to="/projects" tabIndex={tabIndex}>
          <header>Projects</header>
          <p>Things that I’ve been working on</p>
        </NavButtonRight>
        <NavButtonRight to="/community" tabIndex={tabIndex}>
          <header>Community Highlights</header>
          <p>Things other people are working on</p>
        </NavButtonRight>
        <NavButtonRight to="/career" tabIndex={tabIndex}>
          <header>Hire Me!</header>
          <p>Fulltime design or dev, Austin or remote</p>
        </NavButtonRight>
      </NavList>
    </Layout>
  )
}