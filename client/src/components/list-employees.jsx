import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class ListEmployees extends React.Component {

  constructor() {
    super();

    this.state = {
      employees: [

      ]
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

  fetchEmployees() {
    axios.get('/api/empl/getAll')
    .then(response => response.data)
    .then(employees => {
      this.setState({ employees: employees })
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    return(
      <div>
        <div className="employees-list">
          <center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              { 
                this.state.employees.map(empl => {
                  console.log(empl);
                  return (<tr key={empl.empl_id}>
                    <td>1</td>
                    <td>{ empl.firstname }</td>
                    <td>{ empl.lastname }</td>
                    <td>{ empl.position }</td>
                  </tr>
                )})
              }
            </tbody>
          </Table>
          </center>
        </div>
      </div>
    );
  }
}

export default ListEmployees;
