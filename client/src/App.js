import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListEmployees from './components/list-employees';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Office Manager Portal</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Switch>
            <Route exact path="/" component= { AddEmployee } />
          </Switch> */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      <ListEmployees />
    </div>
  );
}

export default App;
