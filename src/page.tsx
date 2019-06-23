import * as React from 'react'
import styled, { css } from 'styled-components'
import { Route, RouteComponentProps } from 'react-router'
import { SceneObject } from './scene'
import { animations } from './styles'

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
  animation: 400ms ease-in-out 200ms ${animations.fadeIn} backwards;
  ${({ focused }) =>
    focused
      ? css`
          transition: filter 300ms ease-in-out, opacity 400ms ease, transform 300ms ease;
          transform: perspective(30in);
        `
      : css`
          transition: filter 300ms ease-in-out, opacity 500ms ease, transform 700ms ease 300ms ;
          transform: perspective(30in) translateZ(-192px);
          filter: grayscale();
          opacity: 0.3;
          pointer-events: none;
          @media print { display: none; }
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