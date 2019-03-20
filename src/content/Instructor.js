import React, { Component } from 'react';
import flynn from '../img/flynnheader.png';
import ryan from '../img/ryanheader.png';
import gabriela from '../img/gabrielaheader.png';
import yvahn from '../img/yvahnheader.png';
import luisa from '../img/luisaheader.png';

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};
    const INSTRUCTOR_PICS ={
      flynn: flynn,
      ryan: ryan,
      juli: "",
      gabriela: gabriela,
      yvahn: yvahn,
      luisa: luisa,
    }
    const INSTRUCTOR_TEXT ={
      flynn: "",
      ryan: "",
      juli: "",
      gabriela: "",
      yvahn: "YAS",
      luisa: "",
    }

    return (
      <div className="col-4 p-1">
        <div className="card">
          <div className="card-body">
            <img className="card-img-top" src={INSTRUCTOR_PICS[this.props.name]} alt={this.props.name+" headshot"} />
            <h5 className="card-title text-center py-auto">{this.props.name.toUpperCase()}</h5>
              <p className="card-text">
                {INSTRUCTOR_TEXT[this.props.name]}
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructor;
