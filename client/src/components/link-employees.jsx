import React from 'react';
import axios from 'axios';
import { Button, Badge, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './styles/employee.styles.css';

class LinkEmployees extends React.Component {

  constructor() {
    super();

    this.state = {
      empl_id: "",
      sup_id: "",
      status: ""
    };
  }

  validateForm() {
    return (this.state.empl_id.length > 0)
      && (this.state.sup_id.length > 0);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      status: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    let req = {
      empl_id: this.state.empl_id,
      sup_id: this.state.sup_id
    }

    axios.post('/api/empl/link', req)
    .then((response) => {
      this.setState({ 
        status: response.data.message
      })
    })
    .catch(error => {
      this.setState({ 
        status: error.response.data.errMessage 
      })
    });
  }

  render() {
    return (
      <div>
        <div className="delempl">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="empl_id">
              <FormLabel color="blue">Subordinate Employee ID</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.empl_id}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="sup_id">
              <FormLabel color="blue">Supervisor Employee ID</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.sup_id}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Badge variant="info">{this.state.status}</Badge>
            </FormGroup> <br />

            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LinkEmployees);