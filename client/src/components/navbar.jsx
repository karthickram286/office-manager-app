import React from 'react';
import { Component } from 'react';
import NavIcon from './navicon';

import './styles/navbar.styles.css';

class Navbar extends Component {

  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="topnav">
        <NavIcon name="Office Manager Portal" url="/" status="active" />
        <NavIcon name="List Employees" url="/list" status="" />
        <NavIcon name="Add Employee" url="/add" status="" />
        <NavIcon name="Remove Employee" url="/delete" status="" />
        <NavIcon name="Link Employees" url="/link" status="" />
      </div>
    );
  }
}

export default Navbar;