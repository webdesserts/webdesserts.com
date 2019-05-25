import * as React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

export function Header (props: Props) {
  let { title } = props
  return (
    <header><h1>{title}</h1></header>
  )
}
