import React, { Component } from 'react';

import Instructor from '../content/Instructor';
import staffpic from '../img/staff.jpg';

class Faculty extends Component {

  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <div className="faculty row no-gutters justify-content-center">
        <Instructor name="flynn" />
        <Instructor name="ryan" />
        <Instructor name="juli" />
        <Instructor name="gabriela" />
        <Instructor name="yvahn" />
        <Instructor name="luisa" />
        <div className="col-12">
          <img className="img-fluid" src={staffpic} alt="staff photo"/>
        </div>
      </div>
    );
  }
}

export default Faculty;
