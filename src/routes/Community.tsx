import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";
import { Project, layouts, hrefs } from "../common";
import { Divider } from "@webdesserts/ui";

const ctzn_links = {
  Website: hrefs.ctzn.website,
  Github: hrefs.ctzn.github,
};

const hyper_protocol_links = {
  Website: hrefs.hyper.website,
  Github: hrefs.hyper.github,
};

const beaker_links = {
  Website: hrefs.beaker.website,
  Github: hrefs.beaker.github,
};

const cabal_links = {
  Website: hrefs.cabal.website,
  Github: hrefs.cabal.github,
};

const Layout = styled(layouts.Default)`
  max-width: 356px;
  grid-gap: 24px;
`;

export function Community(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <Project title="Ctzn" links={ctzn_links} status="alpha">
        An extensible social network with a focus on political design. It gives
        communities creative freedom to design their own unique moderation and
        reward systems. Designed to avoid social "lock-in", it will allow users
        to easily migrate to other hosting providers and even custom UIs.
      </Project>
      <Divider />
      <Project title="Hyper Protocol" links={hyper_protocol_links}>
        A distributed peer-to-peer protocol that enables you to easily share a
        folder across multiple computers. With one URL a friend can pull down
        your files and get live versioned updates. Many exciting new tools are
        being built on this protocol and you should definitely keep your eyes on
        it.
      </Project>
      <Divider />
      {/* <Project title="Beaker Browser" links={beaker_links}>
        A browser built on Chromium that adds supports for sites hosted using
        the Hyper Protocol. Any sites you visit are downloaded from and seeded
        back to your peers. Because Hyper doesn’t rely on traditional servers,
        users can create websites directly in the browser opening up the field
        to a new generation of creators.
      </Project>
      <Divider /> */}
      <Project title="Cabal" links={cabal_links}>
        The P2P equivilant of an IRC client. IRC has stood the test of time, but
        it’s use is still mostly limited to the dev community. One reason for
        this is the amount of effort it takes to create and join channels. With
        Cabal you can do all of that without ever having to spin up a server.
        Cabal is still in its early stages, but it already looks very promising.
      </Project>
    </Layout>
  );
}
