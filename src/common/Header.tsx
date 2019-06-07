import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components';
import { Heading } from './typography';
import IconChevronLeft from '../icons/icon-chevron-left.svg';
import { fonts, colors, mixins } from '../styles'

export type ParentLink = { path: LinkProps["to"], name?: string }
type Props = {
  title?: string
  parent?: ParentLink
}

let BackLink = styled(Link)`
  ${fonts.heading_small}
  ${mixins.spread(css`
    transform: scaleY(calc((32 - 8) / 32)) translateX(-100%);
  `)}
  ${mixins.focus_outline}
  display: inline-grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  height: 32px;
  grid-gap: 4px;
  text-decoration: none;
  line-height: 16px;
  --icon-accent: ${colors.primary};
  transition: color 200ms ease, padding 200ms ease;
  &:hover,
  &:focus {
    padding: 0 8px;
    color: ${colors.liteAlt};
    --icon-accent: currentColor;
  }
`

export function Header(props: Props) {
  let { title, parent } = props;
  return (
    <header>
      {parent ? (
        <BackLink to={parent.path}><IconChevronLeft /> {parent.name || "Back"}</BackLink>
      ) : null}
      {title ? (
        <Heading as="h1" size="large">
          {title}
        </Heading>
      ) : null}
    </header>
  );
}
