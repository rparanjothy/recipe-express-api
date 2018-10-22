import React, { Component } from "react";
import { Button } from "reactstrap";
import { Collapse } from "reactstrap";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { recipes: [] }, showData: false };

    this.getRecipesFromDB = this.getRecipesFromDB.bind(this);
  }

  getRecipesFromDB() {
    fetch("/api/recipes")
      .then(data => data.json())
      .then(x =>
        this.setState({ data: x }, () => {
          console.log(x);
        })
      )
      .then(() => {
        this.setState({ showData: true });
      })
      .catch(e => {
        this.setState({ showData: false });
        console.log("Error: " + e);
      });
  }

  render() {
    return (
      <div>
        Fetching Recipes from DB
        <br />
        <Button color="dark" onClick={this.getRecipesFromDB}>
          GetData
        </Button>
        <hr />
        <Collapse isOpen={this.state.showData}>
          <div style={{ Width: "80%",padding:'20px' }}>
            <ul style={{ listStyle: "none" }}>
              {this.state.data.recipes.map(function(e) {
                return (
                  <li
                    style={{
                      minWidth: "80%",
                      borderBottom: "1px solid",
                      textAlign: "left"
                    }}
                  >
                    {e.name} - {e.ingredients}
                  </li>
                );
              })}
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Recipes;
