import * as React from 'react'
import styled, { css } from 'styled-components'
import { Route, RouteComponentProps } from 'react-router'
import { SceneObject } from './scene'

export type PageComponentProps = {
  path: string;
  children?: React.ReactNode;
}

let PageGroup = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-auto-flow: column;
`

let PageSceneObject = styled(SceneObject)`
  ${({ focused }) =>
    focused
      ? css`
          transition: filter 200ms ease, opacity 200ms ease, transform 200ms ease;
          transform: perspective(30in);
        `
      : css`
          transition: filter 500ms ease, opacity 500ms ease, transform 500ms ease;
          transform: perspective(30in) translateZ(-192px);
          filter: grayscale();
          opacity: 0.3;
          pointer-events: none;
        `}
`;

type Props = {
  children?: React.ReactNode,
  path: string,
  component: React.ComponentClass<RouteComponentProps<any>> | React.StatelessComponent<RouteComponentProps<any>>,
}

export function Page(props: Props) {
  let { path, children, component: Comp } = props;

  return (
    <Route
      path={path}
      render={routeProps => {
        let { isExact } = routeProps.match
        return (
          <PageGroup>
            <PageSceneObject focused={isExact}>
              <Comp {...routeProps} />
            </PageSceneObject>
            {children}
          </PageGroup>
        );
      }}
    />
  );
}
