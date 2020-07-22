import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    const { joined } = this.props;
    return (
      <div>
        {joined.length === 0 ? <div className="sidebar sidebar-header"> No exercises joined yet </div>
          : <div className="sidebar sidebar-header"> You joined {joined.length} exercises </div>
        }
        <div className="sidebar">
          <ul className="sidebar-items">
            {joined.map(item => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                </div>
                <div>
                  {/** TODO - add scheduled exercise times */}
                  {console.log(this.props)}
                  <button onClick={() => this.props.withdraw(item)}>Withdraw</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
