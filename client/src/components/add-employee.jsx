import React from 'react';
import { Button, FormGroup, FormControl, FormLabel, Badge } from 'react-bootstrap';

class AddEmployee extends React.Component {

  constructor() {
    super();

    this.state = {

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
  }

  resetStatus = () => {
    this.setState({ status: '' });
  }

  render() {
    return(
      <div>
        <div className="employee-add-form">
          <form onSubmit= { this.handleSubmit } onChange={ this.resetStatus }>
            <FormGroup controlId="noteTitle">
                <FormLabel color="blue">Title</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value="dummy"
                    onChange= { this.handleChange }
                />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEmployee;