import * as React from 'react'
import styled from 'styled-components'
import { Route, RouteComponentProps } from 'react-router'

export type PageComponentProps = {
  path: string;
  children?: React.ReactNode;
}

let Block = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-auto-flow: column;
`

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
  let $block = React.createRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    let { current } = $block
    let offset = {
      left: current.offsetLeft,
      top: current.offsetTop,
      width: current.offsetWidth,
      height: current.offsetHeight,
    }

    if (exact) onNavigate(offset);
  }, [exact])

  return <Block ref={$block}>{children}</Block>;
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
    <Route path={path} render={routeProps => (
        <RouteNavigator exact={routeProps.match.isExact} onNavigate={onNavigate}>
          <Comp {...routeProps} />
          {children}
        </RouteNavigator>
      )}
    />
  );
}
