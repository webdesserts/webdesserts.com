import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import { Heading, ButtonLink, layouts, NavButtonRight, hrefs } from '../../common'
import { colors, fonts } from '../../styles'

const Layout = styled(layouts.Default)`
  max-width: 480px;
`

const SubHeading = styled.p`
  margin: 0;
`

const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex: row wrap;
  margin-right: -16px;
  & > * {
    margin-right: 16px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-flow: column;
`

const ResumeNavButton = styled(NavButtonRight)`
  margin-left: auto;
  min-height: 32px;
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
        <Heading as="h1" size="large">My Career</Heading>
        <SubHeading>I'm Happily Employeed</SubHeading>
      </header>
      <p>
        I am currently not looking for work. You're still welcome to send
        opportunities my way but there's a good chance I will not pursue them at
        this time. Neverless, thank you for your interest!
      </p>
      {/* <p>
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
      </p> */}
      <Footer>
        <Field>
          <LinkLabel>Email</LinkLabel>
          <ButtonLink tabIndex={tabIndex} href={hrefs.personal.email}>michael@webdesserts.com</ButtonLink>
        </Field>
        <Field>
          <LinkLabel>Linkedin</LinkLabel>
          <ButtonLink tabIndex={tabIndex} href={hrefs.personal.linkedin}>/in/mcmullins</ButtonLink>
        </Field>
        {/* <ResumeNavButton tabIndex={tabIndex} to="/career/resume">
          <header>Paper Resume</header>
        </ResumeNavButton> */}
      </Footer>
    </Layout>
  );
}
