import React from 'react';
import axios from 'axios';
import { Button, Badge, FormGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './styles/employee.styles.css';

class LinkEmployees extends React.Component {

  constructor() {
    super();

    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <p> List empl</p>
      </div>
    )
  }
}

export default withRouter(LinkEmployees);