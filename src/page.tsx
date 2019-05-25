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
  exact: boolean
}

class RouteNavigator extends React.Component<NavigatorProps> {
  $block = React.createRef<HTMLDivElement>();

  navigate() {
    let { exact, onNavigate } = this.props
    let { current } = this.$block
    let offset = {
      left: current.offsetLeft,
      top: current.offsetTop,
      width: current.offsetWidth,
      height: current.offsetHeight,
    }

    if (exact) onNavigate(offset);
  }

  componentDidMount() {
    this.navigate()
  }

  componentDidUpdate(prevProps: NavigatorProps) {
    let { exact } = this.props;
    if (prevProps.exact !== exact) this.navigate()
  }

  render() {
    return <Block innerRef={this.$block}>{this.props.children}</Block>;
  }
}

type Props = {
  children?: React.ReactNode,
  path: string,
  component: React.ComponentClass<RouteComponentProps<any>> | React.StatelessComponent<RouteComponentProps<any>>,
  onNavigate: (offset: Offset) => void
}

export class Page extends React.Component<Props> {
  render() {
    let { path, children, component: Comp, onNavigate, ...otherProps } = this.props;

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
}
