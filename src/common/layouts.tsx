import * as React from 'react'
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom'
import IconChevronLeft from '../icons/icon-chevron-left.svg';
import { fonts, colors, mixins } from '../styles'

type ParentLink = { path: LinkProps["to"], name?: string }

let ParentLinkButton = styled(Link)`
  ${fonts.heading_small}
  ${mixins.spread_from_left}
  ${mixins.focus_outline}

  --icon-accent: ${colors.primary};
  display: inline-grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  padding: 8px 0;
  grid-gap: 4px;
  text-decoration: none;
  line-height: 16px;
  transition: color 200ms ease, padding 200ms ease;
  &:hover,
  &:focus {
    padding: 8px;
    color: ${colors.liteAlt};
    --icon-accent: currentColor;
  }
`

type DefaultLayoutProps = {
  children: React.ReactNode,
  className?: string,
  parent?: ParentLink,
  action?: React.ReactNode
}

const ActionBar = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  height: 32px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  align-items: center;
  justify-items: end;
  grid-gap: 16px;
  width: 100%;

  &:empty { display: none; }
  @media print { display: none; }
  ${ParentLinkButton} {
    justify-self: start;
  }
`

const DefaultBlock = styled.article`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
  width: calc(100vw - 24px * 2);
`


export function Default (props: DefaultLayoutProps) {
  let { children, className, parent, action=null } = props

  return (
    <DefaultBlock className={className}>
      <ActionBar>
        {parent ? (
          <ParentLinkButton to={parent.path}>
            <IconChevronLeft />{parent.name || "Back"}
          </ParentLinkButton>
        ) : null}
        {action}
      </ActionBar>
      {children}
    </DefaultBlock>
  );
}