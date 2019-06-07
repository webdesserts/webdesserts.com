import * as React from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router'
import * as Layouts from '../common/layouts'
import { Project } from '../common/Project'
import { Divider } from '../common/Divider'

const dat_protocol_urls = {
  Website: "https://dat.foundation/",
  Github: "https://github.com/datproject"
}

const beaker_urls = {
  Website: "https://beakerbrowser.com/",
  Github: "https://github.com/beakerbrowser"
}

const cabal_urls = {
  Website: "https://cabal-club.github.io/",
  Github: "https://github.com/cabal-club"
}

const Layout = styled(Layouts.Default)`
  width: 356px;
  grid-gap: 24px;
`

export function Community(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <Project title="Dat Protocol" links={dat_protocol_urls}>
        A distributed peer-to-peer protocol that enables you to easily share a
        folder across multiple computers. With one URL a friend can pull down
        your files and get live versioned updates. Many exciting new tools are
        being built on this protocol and you should definitely keep your eyes
        on it.
      </Project>
      <Divider />
      <Project title="Beaker Browser" links={beaker_urls}>
        A browser built on Chromium that adds supports for sites hosted using
        the Dat protocol. Any sites you visit are downloaded from and seeded
        back to your peers. Because Dat doesn’t rely on traditional servers,
        users can create websites directly in the browser opening up the field
        to a new generation of creators.
      </Project>
      <Divider />
      <Project title="Cabal" links={cabal_urls}>
        The P2P equivilant of an IRC client. IRC has stood the test of time,
        but it’s use is still mostly limited to the dev community. One reason
        for this is the amount of effort it takes to create and join channels.
        With Cabal you can do all of that without ever having to spin up a
        server. Cabal is still in its early stages, but it already looks very
        promising.
      </Project>
    </Layout>
  );
}
