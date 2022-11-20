import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import IconChevronRight from "../icons/icon-chevron-right.svg";
import IconChevronLeft from "../icons/icon-chevron-left.svg";
import { colors, fonts, mixins } from "@webdesserts/ui";

export { NavList, NavButtonRight, NavButtonLeft };

function NavButtonRight(props: NavLink["props"]) {
  let { children, ...otherProps } = props;

  return (
    <NavButton side="right" {...otherProps}>
      {children} <IconChevronRight />
    </NavButton>
  );
}

function NavButtonLeft(props: NavLink["props"]) {
  let { children, ...otherProps } = props;

  return (
    <NavButton side="left" {...otherProps}>
      <IconChevronLeft /> {children}
    </NavButton>
  );
}

const right_styles = css`
  ${mixins.spread_from_right_edge}
  text-align: right;
  grid-template-columns: auto 16px;
  justify-content: end;
  svg {
    grid-column: span 1 / -1;
  }
`;

const left_styles = css`
  ${mixins.spread_from_left_edge}
  text-align: left;
  grid-template-columns: 16px auto;
  justify-content: start;
  svg {
    grid-column: span 1 / 0;
  }
`;

const NavButton = styled(NavLink)<{ side: "right" | "left" }>`
  ${mixins.focus_outline}
  ${({ side = "right" }) => (side === "right" ? right_styles : left_styles)}

  --icon-accent: ${colors.primary};
  text-decoration: none;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 12px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  align-content: center;
  grid-gap: 0 8px;
  transition: color 200ms ease, padding 200ms ease;

  &:hover,
  &:focus,
  &.active {
    --icon-accent: ${colors.liteAlt};
    padding: 4px 12px;
    color: ${colors.liteAlt};
    p {
      color: ${colors.liteAlt};
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
    grid-row: span 2;
  }
`;

const NavList = styled.nav`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 8px 0;
`;
