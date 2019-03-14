import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ContentPane.css';
import bg_main from './img/bg_main.jpeg'
import Content from './Content'

const bg = {
  backgroundImage: 'url('+bg_main+')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat:'no-repeat'
};

const Assembler = ({match}) => (<Content kind={match.params.heading} />);

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
      <div className="ContentPane row justify-content-center" style={bg}>
        <div className="jumbotron jumbotron-fluid pl-2 col-10">
          <div id ="content_dest" className="lead container pb-3">
            <Route path="/:heading" component={Assembler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentPane;
