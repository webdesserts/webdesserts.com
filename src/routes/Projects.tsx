import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import { Project, Divider, layouts } from '../common'

const logger_urls = {
  Figma: "https://www.figma.com/file/YTQS6iZHzqMQPlewPs83sHLq/Web-Desserts?node-id=40%3A48",
  Github: "https://github.com/webdesserts/logger"
}
// const webterm_urls = {
//   Figma: "https://www.figma.com/file/YTQS6iZHzqMQPlewPs83sHLq/Web-Desserts?node-id=217%3A0",
//   Github: "https://github.com/webdesserts/webterm"
// }

const Layout = styled(layouts.Default)`
  max-width: 356px;
  grid-gap: 24px;
`

export function Projects(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <Project title="Logger" status="early development" links={logger_urls}>
        A personal time tracker focused on producing consistant and healthy
        work habits. Not intended to be a strict log, but more of a pomodoro
        with a birds-eye view. It’s my way of improving productivity while
        avoiding burnout.
      </Project>
      {/* <Divider />
      <Project title="WebTerm" status="on hold" links={webterm_urls}>
        Inspired by Paul Frazee’s project of the same name. Explores what a
        terminal could look and function like in on a distributed website
      </Project> */}
    </Layout>
  );
}
