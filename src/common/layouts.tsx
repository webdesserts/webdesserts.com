import * as React from 'react'
import styled from 'styled-components'
import { Header, ParentLink } from './'

type Props = {
  title?: string,
  children: React.ReactNode,
  className?: string,
  parent?: ParentLink
}

let DefaultBlock = styled.article`
  width: 300px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 8px;
`
let DefaultContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
`

export function Default (props: Props) {
  let { title, children, className, parent } = props

  return (
    <DefaultBlock>
      <Header title={title} parent={parent}/>
      <DefaultContent className={className}>
        {children}
      </DefaultContent>
    </DefaultBlock>
  )
}