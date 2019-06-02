import * as React from 'react'
import styled from 'styled-components'
import { Header, ParentLink } from './header'

type Props = {
  title: string,
  children: React.ReactNode,
  className?: string,
  parent?: ParentLink
}

let DefaultBlock = styled.article`
  width: 300px;

  & > * + * {
    margin-top: 16px;
  }
`

export function Default (props: Props) {
  let { title, children, className, parent } = props

  return (
    <DefaultBlock className={className}>
      <Header title={title} parent={parent}/>
      {children}
    </DefaultBlock>
  )
}