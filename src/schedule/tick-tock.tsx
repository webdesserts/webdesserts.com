import * as React from "react";
import styled, { css } from "styled-components";

let Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: space-between;
`;

let Tick = styled.div<{ active?: boolean }>`
  background-color: ${({ active = false }) =>
    active ? "var(--lite-1)" : "var(--lite)"};
  transition: background-color 200ms ease-out;
  width: calc((1 / 60) * (100vh - 8px));
  height: calc((1 / 60) * (100vh - 8px));
  max-height: 4px;
  max-width: 4px;
  flex: 0 1 auto;
`;

namespace TickTock {
  export interface Props {
    mode?: string;
  }
}

export class TickTock extends React.Component<TickTock.Props> {
  static defaultProps = {
    mode: "seconds",
  };

  componentDidMount() {
    this.tick();
  }
  componentDidUpdate() {
    this.tick();
  }

  tick() {
    let now = new Date(Date.now());
    let remaining = 1000 - now.getMilliseconds();
    window.setTimeout(() => {
      this.forceUpdate();
    }, remaining);
  }

  render() {
    let { mode } = this.props;
    let ticks: React.ReactElement[] = [];
    let i = 0;

    let now = new Date(Date.now());
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let increment = seconds;

    if (mode === "minutes") increment = minutes;

    while (i <= 60) {
      let props = {
        key: i,
        position: i,
        active: i <= increment,
      };
      ticks.push(<Tick {...props} />);
      i++;
    }

    return <Wrapper>{ticks}</Wrapper>;
  }
}
