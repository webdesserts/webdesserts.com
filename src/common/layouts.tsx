import * as React from 'react'
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom'
import IconChevronLeft from '../icons/icon-chevron-left.svg';
import { fonts, colors, mixins } from '../styles'

type ParentLink = { path: LinkProps["to"], name?: string }

let ParentLinkButton = styled(Link)`
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

type DefaultLayoutProps = {
  children: React.ReactNode,
  className?: string,
  parent?: ParentLink
}

let DefaultBlock = styled.article`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
  width: calc(100vw - 24px * 2);
  max-width: 356px;

  ${ParentLinkButton} {
    position: absolute;
    top: -40px;
  }
`

export function Default (props: DefaultLayoutProps) {
  let { children, className, parent } = props

  return (
    <DefaultBlock className={className}>
      {children}
      {parent ? (
        <ParentLinkButton to={parent.path}>
          <IconChevronLeft />{parent.name || "Back"}
        </ParentLinkButton>
      ) : null}
    </DefaultBlock>
  );
}
