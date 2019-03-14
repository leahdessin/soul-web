import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './BlockHeader.css';

class BlockHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.subheading = this.heading;
  }
  render() {
    return (
      <li className="col-md-6 col-lg nav-item align-self-center">
        <Link id={this.props.heading.replace(/\s/g, "")+'-nav'} className="nav-link top-level" role="button" to={'/'+this.props.heading.replace(/\s/g, "")}>
          {this.props.heading.toUpperCase()}
        </Link>
      </li>
    );
  }
}

export default BlockHeader;
