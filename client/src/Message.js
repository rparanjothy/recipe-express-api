import React from "react";
import { Component } from "react";
import { Collapse } from "reactstrap";
import { Button } from "reactstrap";
import { CardBody, Card, CardTitle } from 'reactstrap';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { collapseToggle: false };
    this.showMore = this.showMore.bind(this);
    this.buttonLabel="Show More!"
  }

  showMore() {
    this.setState({ collapseToggle: !this.state.collapseToggle });
    this.buttonLabel= this.buttonLabel==="Show Less!"?"Show More!":"Show Less!"
  }

  render() {
    return (
      <div>
        <Button
          color="info"
          onClick={this.showMore}
          style={{ marginTop: "10px" }}
        >
          {this.buttonLabel}
        </Button>
        <Collapse isOpen={this.state.collapseToggle}>
          <h4 style={{ marginTop: "10px" }}>hu</h4>
          <div style={{border: '1px solid',width:'80%',margin:'10vh'}}>
            <Card style={{marginBorder:'10px'}}>
             <CardTitle>This is Card Title</CardTitle>
              <CardBody>
                  This is a card <br/>
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default Message;
