import React, { Component } from 'react';


class Faculty extends Component {

  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <div className="faculty">
        <div className="card col-4">
          <div className="card-body">
            <h5 className="card-title">Flynn Cross</h5>
              <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
