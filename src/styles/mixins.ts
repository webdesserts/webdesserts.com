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
      transition: all 250ms ease, background-color 200ms ease;
      transform: none;
    }
  }
  &::after {
    display: block;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color: ${colors.liteAlt};
    transition: all 400ms ease-in-out, background-color 600ms ease-in;
    z-index: -1;
  }
`;

type SpreadOptions = {
  from?: FlattenSimpleInterpolation,
  to?: FlattenSimpleInterpolation
}

export function spread({ from, to }: SpreadOptions) {
  return css`
    ${spread_base}
    &::after {
      ${from}
    }
    &:hover,
    &:focus,
    &.active {
      &::after {
        ${to}
      }
    }
  `;
}

export const spread_from_right = spread({
  from: css`
    transform: translateX(calc(100%));
  `
});

export const spread_from_right_edge = spread({
  from: css`
    transform: translateX(calc(100% - 2px));
  `
});

export const spread_from_left = spread({
  from: css`
    transform: translateX(calc(-100%));
  `
});

export const spread_from_left_edge = spread({
  from: css`
    transform: translateX(calc(-100% + 2px));
  `
});

export const focus_reset = css`
  &:focus { outline: none; }
`

export const focus_outline = css`
  &:focus,
  &:active {
    outline: 2px solid ${colors.primary};
  }
`