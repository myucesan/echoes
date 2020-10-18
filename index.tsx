import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { RoleCall } from "./RoleCall";
import "./style.css";
import * as admin from "firebase-admin";




interface AppProps {}
interface AppState {
  name: string;
}


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <RoleCall />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
