import React from 'react';
import data from "./data.json";
import Exercises from './components/Exercises';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: data.exercises,
      type: "",
      equipment: "",
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Exercise Challenge Matcher</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Exercises exercises={this.state.exercises}></Exercises>
            </div>
            <div className="sidebar">Exercises joined</div>
          </div>
        </main>
        <footer>
          All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
