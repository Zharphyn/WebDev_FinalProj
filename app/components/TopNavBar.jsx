import React, {Component} from 'react';

export default class TopNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light fixed-top" id="top-nav">
        <span className="navbar-brand">
          <i className="fas fa-signal"></i>
          ExpressOption
        </span>
      </nav>
      // <div className="jumbotron text-center"><h1> BLACK SWAN </h1></div>
    )
  }
}