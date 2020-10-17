import React, { Component } from "react";
import { render } from "react-dom";

class RoleCall extends Component {
  render() {
    return (
      <div>
        <p>RoleCall component</p>
      </div>
    );
  }
}

render(<RoleCall />, document.getElementById("role-call"));
