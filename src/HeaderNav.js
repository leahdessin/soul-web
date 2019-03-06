import React, { Component } from 'react';
import './HeaderNav.css';
import logo from './img/logo.png';
import DropdownHeader from './DropdownHeader';
import BlockHeader from './BlockHeader'

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div id="HeaderNav" className="row text-center py-sm-4 pr-sm-4">
        <nav className="w-100">
          <ul className="nav row justify-content-end">
            <div className="col-md-12 col-lg-2">
                <img src={logo} height="50" alt="Logo" />
            </div>
            <DropdownHeader heading={'about us'} subheadings={['mission','faculty','testimonials','contact']} />
            <DropdownHeader heading={'classes'} subheadings={['pole','silks','lyra','dance']} />
            <DropdownHeader heading={'parties'} subheadings={['pole parties','aerial parties','dance parties']} />
            <BlockHeader heading={'rentals'} />
            <BlockHeader heading={'gallery'} />
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderNav;
