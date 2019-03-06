import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ContentPane.css';
import bg_main from './img/bg_main.jpeg'

const bg = {
  backgroundImage: 'url('+bg_main+')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat:'no-repeat'
};

const Content = ({match}) => (
  <div className="container">
    <h1 id="header_dest" className="display-4">{match.params.subheading.toUpperCase()}</h1>
    <p id ="content_dest" className="lead">
      {match.params.heading}
    </p>
  </div>
);

class ContentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <div className="ContentPane row justify-content-center pt-3 pt-lg-5" style={bg}>
        <div className="jumbotron jumbotron-fluid col-10">
          <Route path="/:heading/:subheading" component={Content}/>
        </div>
      </div>
    );
  }
}

export default ContentPane;
