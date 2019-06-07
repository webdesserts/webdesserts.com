import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import * as Layouts from '../common/layouts'
import { Heading } from '../common/typography';
import { ButtonLink } from '../common/ButtonLink';
import { fonts, colors } from '../styles'

const logger_urls = {
  figma: "https://www.figma.com/file/YTQS6iZHzqMQPlewPs83sHLq/Web-Desserts?node-id=40%3A48",
  github: "https://github.com/webdesserts/dashboard"
}
const webterm_urls = {
  figma: "https://www.figma.com/file/YTQS6iZHzqMQPlewPs83sHLq/Web-Desserts?node-id=217%3A0",
  github: "https://github.com/webdesserts/webterm"
}

const Layout = styled(Layouts.Default)`
  width: 356px;
`

const Divider = styled.hr`
  border: none;
  height: 2px;
  background-image: repeating-linear-gradient(to right, black, black 2px, transparent 2px, transparent 6px);
  margin: 8px 0;
`

const Actions = styled.footer`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  justify-content: start;
  margin-top: -8px;
`

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;
  small {
    color: ${colors.mid};
  }
`

export function Projects(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{path: "/", name: "Back"}}>
      <Header>
        <Heading as="h2" size="medium">Logger</Heading>
        <small>early development</small>
      </Header>
      <p>A personal time tracker focused on producing consistant and healthy work habits. Not intended to be a strict log, but more of a pomodoro with a birds-eye view. It’s my way of improving productivity while avoiding burnout.</p>
      <Actions>
        <ButtonLink href={logger_urls.figma}>Figma</ButtonLink>
        <ButtonLink href={logger_urls.github}>Github</ButtonLink>
      </Actions>
      <Divider />
      <Header>
        <Heading as="h2" size="medium">WebTerm</Heading>
        <small>on hold</small>
      </Header>
      <p>Inspired by Paul Frazee’s project of the same name. Explores what a terminal could look and function like in on a distributed website</p>
      <Actions>
        <ButtonLink href={webterm_urls.figma}>Figma</ButtonLink>
        <ButtonLink href={webterm_urls.github}>Github</ButtonLink>
      </Actions>
    </Layout>
  )}