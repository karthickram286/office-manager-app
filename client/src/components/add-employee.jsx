import React from 'react';
import axios from 'axios';
import { Button, Badge, FormGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './styles/employee.styles.css';

class AddEmployee extends React.Component {

  constructor() {
    super();

    this.state = {
      empl_id: "",
      firstname: "",
      lastname: "",
      position: "CTO",
      is_supervisor: false,
      status: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      status: ''
    });
  }

  handleClick = event => {
    this.setState({
      [event.target.id]: event.target.checked,
      status: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const empl = {
      empl_id: this.state.empl_id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      position: this.state.position,
      is_supervisor: this.state.is_supervisor
    }

    axios.post('/api/empl/add', empl)
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

  validateForm() {
    return (this.state.empl_id.length > 0)
      && (this.state.firstname.length > 1)
      && (this.state.lastname.length > 0);
  }

  render() {
    return (
      <div>
        <div className="addempl">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="empl_id">
              <FormLabel color="blue">Employee ID</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.empl_id}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="firstname">
              <FormLabel color="blue">First Name</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="lastname">
              <FormLabel color="blue">Last Name</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="position">
              <FormLabel color="blue">Position</FormLabel>
              <FormControl as="select" value={this.state.position} onChange={this.handleChange}>
                <option>CEO</option>
                <option>CTO</option>
                <option>VP</option>
                <option>DIRECTOR</option>
                <option>MANAGER</option>
                <option>TEAM_LEAD</option>
                <option>DEVELOPER</option>
                <option>QA</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="is_supervisor">
              <FormCheck type="checkbox" label="Supervisor" value={this.state.is_supervisor} onClick={this.handleClick} />
            </FormGroup><br />

            <FormGroup>
              <Badge variant="info">{this.state.status}</Badge>
            </FormGroup>

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
    );
  }
}

export default withRouter(AddEmployee);