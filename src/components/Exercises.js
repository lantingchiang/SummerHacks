import React, { Component } from 'react'

export default class Exercises extends Component {
  render() {
    return (
      <div>
        <ul className="exercises">
          {this.props.exercises.map(exercise => (
            <li key={exercise._id}>
              <div className="exercise">
                <a href={"#" + exercise._id}>
                  <img src={exercise.image} alt={exercise.title}></img>
                  <p>{exercise.title}</p>
                </a>
                <div className="exercise-type">
                  <div>Description: {exercise.description}</div>
                  <div>Type: {exercise.type}</div>
                  <div>Equipment: {exercise.equipment} </div>
                  <button className="button-primary">Join!</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
