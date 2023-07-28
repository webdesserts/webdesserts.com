import * as React from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import { NavList, layouts, NavButtonRight, hrefs } from "../common";
import { DateTime } from "luxon";
import { Heading, ButtonLink } from "@webdesserts/ui";

let LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`;

let Layout = styled(layouts.Default)`
  max-width: 300px;
  li + li {
    margin-left: 8px;
  }
`;

export function Home(props: RouteComponentProps<{}>) {
  let { isExact } = props.match;
  let tabIndex = isExact ? 0 : -1;

  let career_start = DateTime.fromObject({ month: 1, year: 2012 });
  let years = Math.floor(Math.abs(career_start.diffNow().as("years")));

  let link_props = {
    target: "_blank",
    rel: "noopener noreferrer",
    tabIndex,
  };

  return (
    <Layout>
      <Heading as="h1" size="large">
        Michael Mullins
      </Heading>
      <LinkList>
        <li>
          <ButtonLink href={hrefs.personal.bluesky} {...link_props}>
            Bluesky
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={hrefs.personal.github} {...link_props}>
            Github
          </ButtonLink>
        </li>
        {/* <li>
          <ButtonLink href={hrefs.personal.twitch} {...link_props}>
            Twitch
          </ButtonLink>
        </li> */}
      </LinkList>
      <p>
        Welcome! I am a designer/developer who has been working with the web for
        the past {years} years. I currently play around in the Rust ecosystem in
        my spare time. I also regularly dabble with Color Spaces, SVG, and
        React. If you're new to any of this or you just have questions, feel
        free to reach out!
      </p>
      <NavList>
        <NavButtonRight to="/projects" tabIndex={tabIndex}>
          <header>Projects</header>
          <p>Things that I've been working on</p>
        </NavButtonRight>
        <NavButtonRight to="/community" tabIndex={tabIndex}>
          <header>Community Highlights</header>
          <p>Things other people are working on</p>
        </NavButtonRight>
        <NavButtonRight to="/career" tabIndex={tabIndex}>
          <header>Hire Me!</header>
          <p>Fulltime design & dev, Remote</p>
        </NavButtonRight>
      </NavList>
    </Layout>
  );
}
