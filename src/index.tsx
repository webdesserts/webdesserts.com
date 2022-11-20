import { App } from "./app";
import * as React from "react";
import * as DOM from "react-dom";

window.addEventListener("load", () => {
  DOM.render(<App />, document.querySelector("#app"));
});
