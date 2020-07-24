import React from 'react';
import data from "./data.json";
import Exercises from './components/Exercises';
import Filter from './components/Filter';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: data.exercises,
      joined: JSON.parse(localStorage.getItem("joined")) ? JSON.parse(localStorage.getItem("joined")) : [], //reverses effect of stringify
      type: "",
      sort: "",
    }
  }

  incrementCount = (exerciseChosen) => {
    let joined = this.state.joined.slice()

    let exercises = this.state.exercises.map((exercise) => {
      if (exercise._id === exerciseChosen._id) {
        if (!joined.find(e => e._id === exercise._id)) {
          exercise = { ...exercise, count: exercise.count + 1 }
          joined.push(exercise)
        }
      }
      return exercise;
    })

    this.setState({ exercises, joined })
    //saves state in borwser without need of backend
    localStorage.setItem("joined", JSON.stringify(joined)) //stringify to convert JS objects to string
  }

  withdraw = (exerciseChosen) => {
    let joined = this.state.joined.slice().filter(x => x._id !== exerciseChosen._id);
    this.setState({ joined })
    localStorage.setItem("joined", JSON.stringify(joined))
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
              <Exercises exercises={this.state.exercises} incrementCount={this.incrementCount}></Exercises>
            </div>
            <div className="sidebar">
              <Sidebar joined={this.state.joined} withdraw={this.withdraw} />
            </div>
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
