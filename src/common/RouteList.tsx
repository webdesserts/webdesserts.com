import React from 'react';
import { NavLink } from 'react-router-dom'
import { colors, fonts, mixins } from '../styles'
import styled, { css } from 'styled-components'
import IconChevronRight from '../icons/icon-chevron-right.svg'

export { RouteList, RouteListItem }

function RouteListItem(props: NavLink["props"]) {
  let {children, ...otherProps} = props

  return (
    <RouteLink {...otherProps}>
        {children} <IconChevronRight />
    </RouteLink>
  )
} 

const RouteLink = styled(NavLink)`
  ${mixins.focus_outline}
  ${mixins.spread(css`
    transform: scaleY(calc((48 - 8) / 48)) translateX(calc(100% - 2px));
  `)}

  --icon-accent: ${colors.primary};
  text-decoration: none;
  text-align: right;
  overflow: hidden;
  height: 48px;
  display: flex;
  flex-flow: column nowrap;
  align-items: right;
  justify-content: center;
  padding-right: 16px;
  display: grid;
  grid-template-columns: auto 16px;
  grid-auto-flow: column;
  align-items: center;
  align-content: center;
  justify-content: end;
  grid-gap: 0 8px;
  transition: color 200ms ease, height 200ms ease;

  &:hover,
  &:focus,
  &.active {
    height: 56px;
    --icon-accent: ${colors.liteAlt};
    color: ${colors.liteAlt};
    p { color: ${colors.liteAlt}; }
  }

  header {
    ${fonts.heading_small}
  }

  p {
    margin: 0;
    color: ${colors.mid};
  }

  svg {
    grid-column: span 1 / -1;
    grid-row: span 2;
  }
`;

const RouteList = styled.nav`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 8px 0;
`
