import * as React from "react";
import styled from "styled-components";
import { TickTock } from "./tick-tock";

let Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  left: 0;
  height: 100vh;
  padding: 4px;
  & > * + * {
    margin-left: 4px;
  }
`;

export class Clock extends React.Component {
  render() {
    return (
      <Wrapper>
        <TickTock mode="seconds" />
        <TickTock mode="minutes" />
      </Wrapper>
    );
  }
}
