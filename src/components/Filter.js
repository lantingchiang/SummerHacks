import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Exercise Challenges</div>
        <div className="filter-sort">
          Order {" "}
          <select value={this.props.sort} onChange={this.props.sortExercises}>
            <option>Latest</option>
            <option value="popularity">Most People Joined</option>
          </select>
        </div>
        <div className="filter-type">
          Filter {" "}
          <select value={this.props.type} onChange={this.props.filterExercises}>
            <option value="">All</option>
            <option value="abs">Abs</option>
            <option value="full body">Full body</option>
            <option value="legs">Legs</option>
            <option value="arm">Arm</option>
            <option value="cardio">Cardio</option>
            <option value="beginner">Beginner</option>
            <option value="hiit">HITT</option>
            <option value="weight loss">Weight Loss</option>
          </select>
        </div>
      </div>
    )
  }
}
