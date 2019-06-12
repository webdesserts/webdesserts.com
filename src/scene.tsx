import React, { useLayoutEffect, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Motion, spring } from 'react-motion'
import { Model } from './utils/Model'
import throttle from 'lodash.throttle'

export type Point = { x: number, y: number }
export type Rect = Point & { width: number, height: number }
export type Bounds = { top: number, left: number, bottom: number, right: number }

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

/*=======*\
*  Scene  *
\*=======*/

interface SceneProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
}

export function Scene(props: SceneProps) {
  let { children, ...otherProps } = props
  let scene = SceneModel.useState(SceneModel.initialState);
  return (
    <SceneProvider model={scene}>
      <Block {...otherProps}>
        <Camera>
          {children}
        </Camera>
      </Block>
    </SceneProvider>
  );
}

let Block = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #eee;
  overflow: hidden;
  display: grid;
  align-content: start;
  justify-content: start;
`

type SceneState = Map<HTMLDivElement, boolean>;

class SceneModel extends Model<SceneState> {
  static initialState: SceneState = new Map()

  // init() {
  //   console.log("new scene:", this.state)
  // }

  set(key: HTMLDivElement, value: boolean) {
    this.setState((state) => {
      let nextState = new Map(state)
      nextState.set(key, value)
      return nextState
    })
  }

  delete(key: HTMLDivElement) {
    this.setState((state) => {
      let nextState = new Map(state)
      nextState.delete(key)
      return nextState
    })
  }

  getFocused() : HTMLDivElement[] {
    console.log("finding focus for:", Array.from(this.state.keys()))
    return Array.from(this.state.keys())
      .filter((node) => this.state.get(node) /* is it focused? */)
      .filter((node) => document.documentElement.contains(node))
  }
}

let [ SceneProvider, useScene ] = SceneModel.createContext(SceneModel.initialState);

/*========*\
*  Camera  *
\*========*/

type CameraNodeProps = {
  debug?: boolean
} & Point

let CameraNode = styled.div.attrs(reposition)<CameraNodeProps>`
  width: max-content;
  ${({ debug }) => debug && debugCamera}
`;

interface CameraProps {
  children: React.ReactNode
}

function Camera(props: CameraProps) {
  let { children } = props
  let initialBounds = { top: 0, left: 0, bottom: 0, right: 0}
  let scene = useScene()
  let focused_objs = scene.getFocused()
  let [bounds, setBounds] = useState(initialBounds)

  useLayoutEffect(() => {
    let updateBounds = throttle(() => {
      if (focused_objs.length) {
        setBounds(getTotalBounds(focused_objs.map(getOffsetBounds)))
      }
    }, 500)

    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => {
      window.removeEventListener('resize', updateBounds)
    }
  }, [scene]) 

  let physics = {
    stiffness: 120,
    dampening: 13
  }

  let documentWidth = window.document.documentElement.offsetWidth
  let documentHeight = window.document.documentElement.offsetHeight

  let dest = {
    x: bounds.left + ((bounds.right - bounds.left) / 2) - documentWidth / 2,
    y: 0
  }

  let motion_style = {
    x: spring(-dest.x, physics),
    y: spring(-dest.y, physics)
  }

  return (
    <Motion style={motion_style}>
      {({ x, y }: Point) => (
        <CameraNode x={x} y={y}>
          {children}
          {/* <Debug p={{ x: bounds.right, y: bounds.top }} /> */}
          {/* <Debug p={dest} /> */}
        </CameraNode>
      )}
    </Motion>
  );
}

/*==============*\
*  Scene Object  *
\*==============*/


interface SceneObjectProps extends React.HTMLAttributes<HTMLDivElement>{
  focused: boolean,
  children: React.ReactNode
}

export function SceneObject (props: SceneObjectProps) {
  let { focused, children, ...otherProps } = props
  let nodeRef = React.createRef<HTMLDivElement>()
  let scene = useScene()

  React.useLayoutEffect(function trackLayout() {
    let node = nodeRef.current;
    scene.set(node, focused);
    return () => {
      scene.delete(node);
    };
  }, [focused]);

  return (
    <SceneObjectNode ref={nodeRef} {...otherProps}>
      {children}
    </SceneObjectNode>
  )
}

const SceneObjectNode = styled.div``

/*=======*\
*  Utils  *
\*=======*/

function reposition({ x, y }: Point) {
  return { style: { transform: `translateX(${x}px) translateY(${y}px)` }}
}

function getOffsetBounds(node: HTMLElement) : Bounds {
  return {
    top: node.offsetTop,
    right: node.offsetLeft + node.offsetWidth,
    bottom: node.offsetTop + node.offsetHeight,
    left: node.offsetLeft,
  }
}

// TODO: default to scene bounds if nothing is focused
function getTotalBounds(all_bounds: Bounds[]) {
  let initial: Bounds = { top: Infinity, right: -Infinity, bottom: -Infinity, left: Infinity }
  return all_bounds.reduce((total: Bounds, bounds: Bounds) => {
    total.top = Math.min(total.top, bounds.top)
    total.right = Math.max(total.right, bounds.right)
    total.bottom = Math.max(total.bottom, bounds.bottom)
    total.left = Math.min(total.left, bounds.left)
    return total
  }, initial)
}

/*===========*\
*  Debugging  *
\*===========*/

let DebugBox = styled.svg.attrs(reposition)<Point>`
  position: absolute;
  width: 10px;
  height: 10px;
  stroke: red;
  fill: none;
  stroke-width: 4;
`

let debugCamera = css`
  outline: solid red 2px;

  &::before {
    display: block;
    content: "camera";
    color: red;
    opacity: .5;
    top: -20px;
    left: 0px;
    position: absolute;
  }
`

function Debug ({ p, dot=false }) {
  return (
    <DebugBox {...p} viewBox="-10 -10 20 20">
      <circle cx="0" cy="0" r={dot ? 2 : 8 } />
    </DebugBox>
  )
}
