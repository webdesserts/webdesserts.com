import React, { useLayoutEffect, useState } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Motion, spring } from 'react-motion'
import { Model } from './utils/Model'
import throttle from 'lodash.throttle'
import { colors } from './styles'

export type Point = { x: number, y: number }
export type Size = { width: number, height: number }
export type Rect = Point & Size
export type Bounds = { top: number, left: number, bottom: number, right: number }

// ## Scene
// An x, y, z plane where "objects" can take up space

// ## Scene Object
// An item that takes up space and can be placed at specific points in a scene.
// The scene is responsible for managing object placement

// ## Camera
// An area containg all focused objects on the scene. Responsible for moving
// between focused objects

/*==========*\
*  Elements  *
\*==========*/

type CameraElProps = Size
let CameraEl = styled.div.attrs(resize)<CameraElProps>`
  /* ${debugBox(colors.primary, "camera")} */
  box-sizing: content-box;
  overflow: visible;
  @media print {
    width: initial !important;
    height: initial !important;
  }
`;

type SceneElProps = Point
let SceneEl = styled.div.attrs(reposition)<SceneElProps>`
  /* ${debugBox(colors.secondary, "scene")} */
  position: relative; /* safari needs this for some reason and I'm not sure why */
  width: fit-content;
  height: max-content;
  @media print {
    transform: none !important;
  }
`

/*=======*\
*  Scene  *
\*=======*/

interface SceneProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
  className?: string
}

export function Scene(props: SceneProps) {
  let { children, className } = props
  let scene = SceneModel.useState(SceneModel.initialState);
  return (
    <SceneProvider model={scene}>
      <Camera className={className}>{children}</Camera>
    </SceneProvider>
  );
}

type SceneState = Map<HTMLDivElement, boolean>;

class SceneModel extends Model<SceneState> {
  static initialState: SceneState = new Map()

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
    // console.log("finding focus for:", Array.from(this.state.keys()))
    return Array.from(this.state.keys())
      .filter((node) => this.state.get(node) /* is it focused? */)
      .filter((node) => document.documentElement.contains(node))
  }
}

let [ SceneProvider, useScene ] = SceneModel.createContext(SceneModel.initialState);

/*========*\
*  Camera  *
\*========*/

interface CameraProps {
  children: React.ReactNode,
  className?: string
}

function Camera(props: CameraProps) {
  let { children, className } = props
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

  let dest: Rect = {
    x: bounds.left,
    y: bounds.top,
    width: bounds.right - bounds.left,
    height: bounds.bottom - bounds.top
  }

  let motion_style = {
    x: spring(-dest.x, physics),
    y: spring(-dest.y, physics),
    width: spring(dest.width, physics),
    height: spring(dest.height, physics)
  }

  return (
    <Motion style={motion_style}>
      {({ x, y, width, height }: Rect) => (
        <CameraEl className={className} width={width} height={height}>
          <SceneEl x={x} y={y}>{children}</SceneEl>
        </CameraEl>
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
    <SceneObjectEl ref={nodeRef} {...otherProps}>
      {children}
    </SceneObjectEl>
  )
}

const SceneObjectEl = styled.div``

/*=======*\
*  Utils  *
\*=======*/

function reposition({ x, y }: Point) {
  return {
    style: {
      transform: `translateX(${x}px) translateY(${y}px)`
    }
  };
}

function resize({ width, height }: Size) {
  return {
    style: {
      width: `${width}px`,
      height: `${height}px`
    }
  };
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


function debugBox(color: string = colors.mid, label?: string) {
  return css`
    position: relative;
    outline: solid ${color} 2px;
    ${label &&
      css`
        &::before {
          display: block;
          content: "${label}";
          color: ${color};
          top: -20px;
          left: 0px;
          position: absolute;
        }
      `}
  `;
};