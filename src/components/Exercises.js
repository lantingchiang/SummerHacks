import React, { Component } from 'react'

export default class Exercises extends Component {
  render() {
    return (
      <div>
        <ul className="exercises">
          {this.props.exercises.map(exercise => (
            <li key={exercise._id}>
              <div className="exercise">
                <img src={exercise.image} alt={exercise.title}></img>
                <a href={"#" + exercise._id}>
                  <div className="title">{exercise.title}</div>
                </a>
              </div>
              <div className="exercise-details">
                <div>Description: {exercise.description}</div>
                <div>Type: {exercise.type}</div>
                <div>Equipment: {exercise.equipment} </div>
                <div>Number Joined: {exercise.count} </div>
                <button className="button-primary">Join!</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
