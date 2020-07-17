import React from 'react';
import data from "./data.json";
import Exercises from './components/Exercises';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: data.exercises,
      type: "",
      sort: "",
    }
  }

  sortExercises = (event) => {
    const sortBy = event.target.value;
    console.log(sortBy);
    this.setState((state) => ({
      sort: sortBy,
      exercises: this.state.exercises.slice()
        .sort((a, b) =>
          sortBy === "popularity"
            ? a.count > b.count
              ? -1
              : 1
            : a._id > b._id
              ? -1
              : 1
        ),
    }))
  }

  filterExercises = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ type: event.target.value, exercises: data.exercises })
    } else {
      this.setState({
        type: event.target.value,
        exercises: data.exercises.filter(exercise =>
          exercise.type.toLowerCase().indexOf(event.target.value) >= 0)
      })
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
              <Filter
                count={this.state.exercises.length}
                type={this.state.type}
                sort={this.state.sort}
                filterExercises={this.filterExercises}
                sortExercises={this.sortExercises}
              ></Filter>
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
