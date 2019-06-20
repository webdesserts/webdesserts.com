import styled, { css } from 'styled-components'
import { mixins, fonts, colors } from '../styles'
import { ButtonLink } from './ButtonLink';

export const Button = styled(ButtonLink).attrs({ as: "button" })`
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`