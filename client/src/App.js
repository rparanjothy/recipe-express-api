import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="nav-menu"> <ul class="nav-menu-list">
            <li class="nav-menu-list-item">view</li>
            <li class="nav-menu-list-item">add</li>
            <li class="nav-menu-list-item">update</li>
            <li class="nav-menu-list-item">delete</li>
          </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
