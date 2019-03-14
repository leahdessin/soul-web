import React, { Component } from 'react';


class Faculty extends Component {

  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <div className="faculty row">
        <div className="col-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Flynn</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
        <div className="col-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ryan</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
        <div className="col-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Juli</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gabriela</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Yvahn</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Luisa</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
