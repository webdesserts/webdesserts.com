import React from 'react';
import styled from 'styled-components'
import { Heading, ButtonLink, colors } from '@webdesserts/ui'

interface ProjectProps {
  title: string,
  status?: string,
  children: React.ReactNode,
  links: { [key: string]: string }
}

export function Project(props: ProjectProps) {
  let { title, status, children, links } = props
  return (
    <ProjectSection>
      <ProjectHeader>
        <Heading as="h2" size="medium">{title}</Heading>
        {status ? <small>{status}</small> : null}
      </ProjectHeader>
      <p>{children}</p>
      <ProjectActions>
        {Object.entries(links).map(([name, url]) => (
          <ButtonLink key={name} href={url}>{name}</ButtonLink>
        ))}
      </ProjectActions>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
`

const ProjectActions = styled.footer`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  justify-content: start;
  margin-top: -8px;
`

const ProjectHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;

  small {
    color: ${colors.mid};
  }
`
