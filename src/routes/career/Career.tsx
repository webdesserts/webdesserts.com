import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import { Heading, ButtonLink, layouts, NavButtonRight } from '../../common'
import { colors, fonts } from '../../styles'

const Layout = styled(layouts.Default)`
  max-width: 600px;
`

const SubHeading = styled.p`
  margin: 0;
`
const Footer = styled.footer`
  display: grid;
  grid-gap: 0 16px;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto 1fr auto;
  justify-content: left;
`

const ResumeNavButton = styled(NavButtonRight)`
  grid-row: span 1 / -1;
  margin-left: auto;
`

const LinkLabel = styled.label`
  ${fonts.caption}
  color: ${colors.mid};
`

export function Career(props: RouteComponentProps<{}>) {
  let { isExact } = props.match
  let tabIndex = isExact ? 0 : -1

  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <header>
        <Heading as="h1" size="large">I'm looking for work</Heading>
        <SubHeading>UI Design/Development – Remote or Austin, TX</SubHeading>
      </header>
      <p>
        I’m currently in between jobs and looking for my next role. If you
        need a developer who can implement your designer’s original vision or
        a designer who can speak your developer’s language, I can help.
      </p>
      <p>
        I am most comfortable in a web frontend environment working with React
        &amp; CSS, but I am always open to learning something new. I especially
        enjoy working with complex UIs and animations that are difficult to
        mock up or are limited by the technology. If you have a project that
        could use my skillset, contact me.
      </p>
      <Footer>
        <LinkLabel>Email</LinkLabel>
        <ButtonLink tabIndex={tabIndex} href="mailto:michael@webdesserts.com">michael@webdesserts.com</ButtonLink>
        <LinkLabel>Linkedin</LinkLabel>
        <ButtonLink tabIndex={tabIndex} href="https://www.linkedin.com/in/mcmullins">/in/mcmullins</ButtonLink>
        <ResumeNavButton tabIndex={tabIndex} to="/career/resume">
          <header>Paper Resume</header>
        </ResumeNavButton>
      </Footer>
    </Layout>
  );
}
