import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles/employee.styles.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className="addempl">
        <h2>Welcome to Office Manager Portal</h2>
      </div>
    )
  }
}

export default withRouter(HomePage);