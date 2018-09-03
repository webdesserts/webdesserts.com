import * as React from 'react'
import styled from 'styled-components'

export type PageProps = {
  path: string;
  subPage?: React.ReactNode;
  children?: React.ReactNode;
}

let Block = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-auto-flow: column;
`

let Article = styled.article`
  width: 320px;

  & > * + * {
    margin-top: 16px;
  }
`;

type Props = {
  title: string,
  children: React.ReactNode,
  subPage?: React.ReactNode,
  className?: string,
}

export function Page (props: Props) {
  let { title, children, subPage = null, className } = props

  return (
    <Block>
      <Article className={className}>
        <header><h1>{title}</h1></header>
        {children}
      </Article>
      {subPage}
    </Block>
  )
}
