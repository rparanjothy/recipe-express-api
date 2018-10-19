import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./AppNavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div class="nav-menu">
            
            <ul class="nav-menu-list">
              <li class="nav-menu-list-item">view</li>
              <li class="nav-menu-list-item">add</li>
              <li class="nav-menu-list-item">update</li>
              <li class="nav-menu-list-item">delete</li>
            </ul>
          </div>
           */}
           <div> Welcome!</div>

          <AppNavBar />
        </header>
      </div>
    );
  }
}

export default App;
