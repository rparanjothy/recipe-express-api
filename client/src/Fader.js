import React from "react";
import { Component } from "react";
import { Button } from "reactstrap";
import { Fade } from "reactstrap";

class Fader extends Component {
  constructor(props) {
    super(props);
    this.x_local = 0;
    this.state = { x: 0, fadeSwitch: true };
    this.changeX = this.changeX.bind(this);
  }

  changeX() {
    if (this.x_local < 9) {
      this.x_local += 1;
      console.log("Xlocal:" + this.x_local);
      this.setState({ x: this.x_local });
    } else {
      this.setState({ fadeSwitch: false });
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.changeX} style={{margin:"20px"}}> Welcome </Button>
        <Fade in={this.state.fadeSwitch}>
          This message will disappear post 10 clicks {this.x_local}
        </Fade>
      </div>
    );
  }
}

export default Fader;
