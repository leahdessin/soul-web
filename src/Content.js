import React, { Component } from 'react';
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

class Content extends Component {


  render() {
    const CONTENT_STATE = {
      faculty: <Faculty />,
      mission: <Mission />,
      testimonials: <Testimonials />,
      contact: <Contact />,
      poleclasses: <PoleClasses />,
      silksclasses: <SilksClasses />,
      lyraclasses: <LyraClasses />,
      danceclasses: <DanceClasses />,
      poleparties: <PoleParties />,
      aerialparties: <AerialParties />,
      danceparties: <DanceParties />,
      gallery: <Gallery />,
      rentals: <Rentals />,
      booknow: <BookNow />,
    };
    return (
      <div className="Content row">
        {CONTENT_STATE[this.props.kind]}
      </div>
    );
  }
}

export default Content;
