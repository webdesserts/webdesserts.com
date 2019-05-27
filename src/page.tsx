import * as React from 'react'
import styled, { css } from 'styled-components'
import { Route, RouteComponentProps } from 'react-router'

export type PageComponentProps = {
  path: string;
  children?: React.ReactNode;
}


let PageGroup = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-auto-flow: column;
`

type PageWrapperProps = {
  exact: boolean,
}

let PageWrapper = styled.div<PageWrapperProps>`
  ${({ exact }) =>
    exact
      ? css`
          transition: filter 200ms ease, opacity 200ms ease;
        `
      : css`
          transition: filter 500ms ease, opacity 500ms ease;
          filter: grayscale() blur(1px);
          opacity: 0.5;
          pointer-events: none;
        `}
`;

export type Offset = {
  left: number,
  top: number,
  width: number,
  height: number,
}

type NavigatorProps = {
  onNavigate: (offset: Offset) => void,
  exact: boolean,
  children: React.ReactNode
}

function RouteNavigator(props: NavigatorProps) {
  let { exact, onNavigate, children } = props
  let groupRef = React.createRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    let { current } = groupRef
    let offset = {
      left: current.offsetLeft,
      top: current.offsetTop,
      width: current.offsetWidth,
      height: current.offsetHeight,
    }

    if (exact) onNavigate(offset);
  }, [exact])

  return <PageWrapper exact={exact} ref={groupRef}>{children}</PageWrapper>;
}

type Props = {
  children?: React.ReactNode,
  path: string,
  component: React.ComponentClass<RouteComponentProps<any>> | React.StatelessComponent<RouteComponentProps<any>>,
  onNavigate: (offset: Offset) => void
}

export function Page(props: Props) {
  let { path, children, component: Comp, onNavigate, ...otherProps } = props;

  return (
    <Route
      path={path}
      render={routeProps => {
        let exact = routeProps.match.isExact;
        return (
          <PageGroup>
            <RouteNavigator exact={exact} onNavigate={onNavigate}>
              <Comp {...routeProps} />
            </RouteNavigator>
            {children}
          </PageGroup>
        );
      }}
    />
  );
}
