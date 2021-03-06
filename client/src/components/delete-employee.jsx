import React from 'react';
import axios from 'axios';
import { Button, Badge, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './styles/employee.styles.css';

class DeleteEmployee extends React.Component {

  constructor() {
    super();

    this.state = {
      empl_id: "",
      status: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      status: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    let empl_id = this.state.empl_id;
    
    axios.delete('/api/empl/' + empl_id)
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
    return (this.state.empl_id.length > 0);
  }

  render() {
    return (
      <div>
        <div className="delempl">
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
    )
  }
}

export default withRouter(DeleteEmployee);