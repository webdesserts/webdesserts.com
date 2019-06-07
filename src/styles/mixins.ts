import { css, FlattenSimpleInterpolation } from 'styled-components'
import * as colors from './colors'

const spread_base = css`
  position: relative;
  overflow: hidden;
  transition: color 200ms ease;
  &:hover,
  &:focus,
  &.active {
    color: ${colors.liteAlt};
    --icon-accent: currentColor;
    &::after {
      background-color: ${colors.darkAlt};
      transition: transform 250ms ease, background-color 200ms ease;
      transform: none;
    }
  }
  &::after {
    display: block;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${colors.liteAlt};
    transition: transform 400ms ease-in-out, background-color 600ms ease-in;
    z-index: -1;
  }
`

export function spread(styles: FlattenSimpleInterpolation) {
  return css`
    ${spread_base}
    &::after {
      ${styles}
    }
  `
}

export const focus_outline = css`
  &:focus,
  &:active {
    outline: 2px solid ${colors.primary};
  }
`