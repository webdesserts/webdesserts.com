import { fonts, colors, mixins } from '../styles'
import styled, { css } from 'styled-components'

export const ButtonLink = styled.a`
  ${fonts.heading_small}
  ${mixins.focus_outline}
  ${mixins.spread(css`
    background-color: ${colors.primary};
    transform: translateX(calc(-100% + 24px)) translateY(12px) scaleY(calc(2 / 32));
  `)}
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  text-decoration: none;
  transition: color 200ms ease, padding 200ms ease;
  &:hover,
  &:focus {
    padding: 0 8px;
    text-decoration: underline;
  }
  /* &::before{
    position: absolute;
    display: block;
    content: '';
    bottom: 2px;
    left: 0;
    height: 2px;
    width: 100%;
    transition: width 200ms ease;
    background-color: ${colors.primary};
    width: 24px;
  } */
  /* &:hover::before {
    width: 100%;
  } */
`