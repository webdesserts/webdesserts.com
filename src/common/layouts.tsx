import * as React from 'react'
import styled from 'styled-components'
import { Header } from './header'

type Props = {
  title: string,
  children: React.ReactNode,
  className?: string,
}

let DefaultBlock = styled.article`
  width: 320px;

  & > * + * {
    margin-top: 16px;
  }
`

export function Default (props: Props) {
  let { title, children, className } = props

  return (
    <DefaultBlock className={className}>
      <Header title={title} />
      {children}
    </DefaultBlock>
  )
}