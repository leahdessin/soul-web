import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ContentPane.css';
import bg_main from './img/bg_main.jpeg'
import Faculty from './content/Faculty';
import Mission from './content/Mission';
import Testimonials from './content/Testimonials';
import Contact from './content/Contact';
import PoleClasses from './content/PoleClasses';
import SilksClasses from './content/SilksClasses';
import LyraClasses from './content/LyraClasses';
import DanceClasses from './content/DanceClasses';
import PoleParties from './content/PoleParties';
import AerialParties from './content/AerialParties';
import DanceParties from './content/DanceParties';
import Gallery from './content/Gallery';
import Rentals from './content/Rentals';
import BookNow from './content/BookNow';


const bg = {
  backgroundImage: 'url('+bg_main+')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat:'no-repeat'
};
const CONTENT_STATE = {
  faculty: <Faculty />,
  mission: <Mission />,
  testimonials: <Testimonials />,
  contact: <Contact />,
  pole: <PoleClasses />,
  silks: <SilksClasses />,
  lyra: <LyraClasses />,
  dance: <DanceClasses />,
  poleparties: <PoleParties />,
  aerialparties: <AerialParties />,
  danceparties: <DanceParties />,
  gallery: <Gallery />,
  rentals: <Rentals />,
  booknow: <BookNow />,
};

const Assembler = ({match}) => (
  CONTENT_STATE[match.params.heading]
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
      <div className="ContentPane justify-content-center" style={bg}>
        <div className="showbox container p-2">
          <Route path="/:heading" component={Assembler}/>
        </div>
      </div>
    );
  }
}

export default ContentPane;
