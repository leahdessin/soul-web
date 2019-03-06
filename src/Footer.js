import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    //const subs = this.props.subheadings => {return <a className="dropdown-item" href="/{title}">title</a>};

    return (
      <div id="footer" className="row justify-content-center text-center">
        <div>
          Copyright &copy; 2019 by SOUL Aerial Performing Arts.
          <br />
          Site design & dev by <b>Leah Criscolo</b>
        </div>
      </div>
    );
  }
}

export default Footer;
