import * as React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

let Block = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #eee;
  overflow: hidden;
  display: grid;
  padding: 24px;
  align-content: start;
  justify-content: start;
`

let ViewBox = styled.div.attrs<Point>({
  style: ({ x, y }) => ({ transform: `translateX(${x}px) translateY(${y}px)` })
})`
  width: min-content;
  padding: 64px;
  outline: solid red 2px;

  &::before {
    display: block;
    content: "view box";
    color: red;
    opacity: .5;
    top: -20px;
    left: 0px;
    position: absolute;
`

// for now, these are all the same
type Point = { x: number, y: number }

type Props = {}
type State = {
  p: Point,
}

export class ViewPlane extends React.Component<Props,State> {
  state = {
    p: { x: 0, y: 0 },
  }

  $block = React.createRef<HTMLDivElement>();
  $viewbox = React.createRef<HTMLDivElement>();

  onChange = (event: React.MouseEvent<HTMLDivElement>) => {
    let { clientX: x, clientY: y } = event
    let { $viewbox, $block } = this
    let box = $viewbox.current.getBoundingClientRect()
    let block = $block.current.getBoundingClientRect()

    let p = {
      x: (box.left - Math.round(x) + block.width / 2),
      y: (box.top - Math.round(y) + block.height / 2),
    }

    this.setState({ p })
  }

  render () {
    let { children } = this.props
    let { p } = this.state

    let physics = {
      stiffness: 120,
      dampening: 13
    }

    let motion_style = {
      x: spring(p.x, physics),
      y: spring(p.y, physics)
    }

    return (
      <Block innerRef={this.$block}>
        <Motion style={motion_style}>{({x, y}) => (
          <ViewBox innerRef={this.$viewbox} x={x} y={y} onClick={this.onChange}>
            {children}
            <Debug p={{ x, y }} dot />
            <Debug p={p} />
          </ViewBox>
        )}</Motion>
      </Block>
    )
  }
}

/*===========*\
*  Debugging  *
\*===========*/

let DebugBox = styled.svg.attrs<{ p: Point }>({
  style: ({ p }) => ({
    left: `calc(50vw + ${-p.x}px - 5px)`,
    top: `calc(50vh + ${-p.y}px - 5px)`,
  })
})`
  position: absolute;
  width: 10px;
  height: 10px;
  stroke: red;
  fill: none;
  stroke-width: 4;
`

function Debug ({ p, dot=false }) {
  return (
    <DebugBox p={p} viewBox="-10 -10 20 20">
      <circle cx="0" cy="0" r={dot ? 2 : 8 } />
    </DebugBox>
  )
}