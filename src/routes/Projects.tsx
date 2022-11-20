import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";
import { Project, layouts, hrefs } from "../common";

const dot_cli_links = {
  Github: hrefs.dots_cli.github,
  Crate: hrefs.dots_cli.crate,
};

const Layout = styled(layouts.Default)`
  max-width: 356px;
  grid-gap: 24px;
`;

export function Projects(props: RouteComponentProps<{}>) {
  return (
    <Layout parent={{ path: "/", name: "Back" }}>
      <Project title="Dot Cli" status="early development" links={dot_cli_links}>
        The cli I use to manage all of my dotfiles. It will pull down a repo
        containing your dotfiles, and using a declaritive config, it will
        automatically link the files where they belong, communicating what
        changes will be made to your file system along the way.
      </Project>
    </Layout>
  );
}
