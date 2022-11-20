import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";
import { Project, layouts, hrefs } from "../common";
import { colors, Divider, fonts } from "@webdesserts/ui";
import { Note } from "../common/Note";

const at_protocol_links = {
  Website: hrefs.at_protocol.website,
  Github: hrefs.at_protocol.github,
};

const nushell_links = {
  Website: hrefs.nushell.website,
  Github: hrefs.nushell.github,
};

const Layout = styled(layouts.Default)`
  max-width: 356px;
  grid-gap: 24px;
`;

export function Community(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <Note>
        A set of projects that I like and I want you to know about. Note, I am
        not actually involved in these projects and am not taking any form of
        credit for them.
      </Note>
      <Divider />
      <Project
        title="ATProtocol"
        links={at_protocol_links}
        status="closed beta"
      >
        An experimental social networking protocol created by the Bluesky team.
        The team, originally split off from Twitter prior to the change in
        ownership, is working to define a set of extensible technologies that
        ensures future social networks aren't locked down to a specific company.
        If you aren't happy with the state of social networks and believe there
        can be something better, please check them out.
      </Project>
      <Divider />
      <Project title="Nushell" links={nushell_links}>
        An interesting project that is tryign to rethink what a modern shell
        should look like. What if inputs and outputs weren't just strings? What
        if commands used real types? What if autocompletion was built in? What
        if documentation was auto-generated? Nushell plays around with all of
        this while providing compatibility layers for your existing shell
        commands.
      </Project>
    </Layout>
  );
}
