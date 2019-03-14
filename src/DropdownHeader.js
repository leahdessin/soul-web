import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './DropdownHeader.css';

class DropdownHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <li className="col-md-4 col-lg nav-item dropdown align-self-center">
        <button
          id={this.props.heading.replace(/\s/g, "")+'-nav'}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {this.props.heading.toUpperCase()}
        </button>
        <div className="dropdown-menu py-0" aria-labelledby="{this.props.heading}-nav">
          {this.props.subheadings.map((title,i) => <Link key={i} className="dropdown-item" to={'/'+title.replace(/\s/g, "")}>{title}</Link>)}
        </div>
      </li>
    );
  }
}

export default DropdownHeader;
