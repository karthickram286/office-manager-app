import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Badge, FormGroup } from 'react-bootstrap';

import './styles/employee.styles.css';
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
        this.setState({ status: err.response.data.errMessage })
      });
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    return (
      <div>
        <div className="listempl">
          <center>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                  <th>Supervisor</th>
                  <th>Creation Date</th>
                  <th>Supervisor ID</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.employees.map(empl => {
                    return (<tr key={empl.empl_id}>
                      <td>{empl.empl_id}</td>
                      <td>{empl.firstname}</td>
                      <td>{empl.lastname}</td>
                      <td>{empl.position}</td>
                      <td>{empl.is_supervisor ? "Yes" : "No"}</td>
                      <td>{empl.creation_date.split('T')[0]}</td>
                      <td><center>{empl.supervisor_id ? empl.supervisor_id : "NA"}</center></td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <FormGroup>
              <Badge variant="info">{this.state.status}</Badge>
            </FormGroup>
          </center>
        </div>
      </div>
    );
  }
}

export default withRouter(ListEmployees);
