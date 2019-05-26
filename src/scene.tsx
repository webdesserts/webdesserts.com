import * as React from 'react'
import styled, { css } from 'styled-components'
import { Motion, spring } from 'react-motion'

// ## Scene
// An x,y,z plane where "objects" can take up space

// ## Scene Object (TODO)
// An item that takes up space and can be placed at specific points in a scene
// 
// - A scene should be responsible for positioning scene objects
// - I'm not completely sure object placement should interact with CSS's default
//   layout models. Maybe objects just report where they are and we can just
//   nudge objects in certain directions like "below", "right", or "above"?
// - Another question is how dialogs work in this type of scene. It would be
//   great if we could take advantage of the z axis.

// ## Camera (TODO)
// The x, y, z coordinates that define the current focus in the scene


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

type ViewBoxProps = {
  debug?: boolean
} & Point

let debugViewBox = css`
  outline: solid red 2px;

  &::before {
    display: block;
    content: "view box";
    color: red;
    opacity: .5;
    top: -20px;
    left: 0px;
    position: absolute;
  }
`

let ViewBox = styled.div.attrs(({ x, y }: Point) => ({
  style: { transform: `translateX(${x}px) translateY(${y}px)` }
}))<ViewBoxProps>`
  width: min-content;
  padding: 64px;
  ${({ debug }) => debug && debugViewBox}
`

export type Point = { x: number, y: number }
type Props = {
  children: React.ReactNode
} & Point

export function Scene(props: Props) {
  let $block = React.createRef<HTMLDivElement>();
  let $viewbox = React.createRef<HTMLDivElement>();

  let dest = {
    x: -props.x,
    y: -props.y
  }

  let physics = {
    stiffness: 120,
    dampening: 13
  }

  let motion_style = {
    x: spring(dest.x, physics),
    y: spring(dest.y, physics)
  }

  return (
    <Block ref={$block}>
      <Motion style={motion_style}>{({ x, y }: Point) => (
        <ViewBox ref={$viewbox} x={x} y={y}>
          {props.children}
          {/* <Debug p={{ x, y }} dot />
          <Debug p={dest} /> */}
        </ViewBox>
      )}</Motion>
    </Block>
  )
}

/*===========*\
*  Debugging  *
\*===========*/

let DebugBox = styled.svg.attrs(({ x, y }: Point) => ({
  style: {
    left: `calc(${-x}px - 5px)`,
    top: `calc(${-y}px - 5px)`,
  }
}))<Point>`
  position: absolute;
  width: 10px;
  height: 10px;
  stroke: red;
  fill: none;
  stroke-width: 4;
`

function Debug ({ p, dot=false }) {
  return (
    <DebugBox {...p} viewBox="-10 -10 20 20">
      <circle cx="0" cy="0" r={dot ? 2 : 8 } />
    </DebugBox>
  )
}