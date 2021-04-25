import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import { Project, layouts, hrefs } from '../common'

const logger_urls = {
  Figma: hrefs.logger.figma,
  Github: hrefs.logger.github
}

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
    </Layout>
  );
}
