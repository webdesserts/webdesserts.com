import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components';

export type ParentLink = { path: LinkProps["to"], name?: string }
type Props = {
  title: string
  parent?: ParentLink
}

let BackLink = styled(Link)`
  display: block;
  margin-top: -16px;
  line-height: 16px;
`

export function Header (props: Props) {
  let { title, parent } = props
  return (
    <header>
      {parent ?
        <BackLink to={parent.path}>
          &lt; {parent.name || "Back"}
        </BackLink> : null
      }
      <h1>{title}</h1>
    </header>
  )
}
