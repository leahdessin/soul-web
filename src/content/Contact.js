import React, { Component } from 'react';


class Contact extends Component {

  render() {

    return (
      <div className="row justify-content-right">
        <div className="col mapouter">
          <div className="gmap_canvas">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=SOUL%20Aerial%20and%20Performing%20Arts&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <a href="https://www.pureblack.de">webseite erstellen lassen</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
