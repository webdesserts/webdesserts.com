import React from 'react';
import { NavLink } from 'react-router-dom'
import { colors, fonts } from '../styles'
import styled from 'styled-components'
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
  text-decoration: none;
  text-align: right;
  position: relative;
  overflow: hidden;
  height: 56px;
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
  transition: color 250ms ease;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: ${colors.liteAlt};
    transition: transform 400ms ease-in-out, background-color 600ms ease-in;
    transform: scaleY(calc((56 - 16) / 56)) translateX(calc(100% - 2px));
    z-index: -1;
  }
  &:hover::after,
  &:focus::after,
  &.active::after {
    background-color: ${colors.darkAlt};
    transition: transform 250ms ease, background-color 200ms ease;
    transform: none;
  }

  &:focus {
    outline: 2px solid ${colors.primary};
  }

  &:not(:hover):not(:focus):not(.active) {
    --icon-accent: ${colors.primary};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${colors.liteAlt};
    p {
      color: inherit;
    }
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
