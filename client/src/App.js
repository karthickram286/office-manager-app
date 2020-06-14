import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './components/homepage';
import ListEmployees from './components/list-employees';
import AddEmployee from './components/add-employee';
import LinkEmployees from './components/link-employees';
import DeleteEmployee from './components/delete-employee';

import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/list" component={ ListEmployees } />
        <Route exact path="/add" component={ AddEmployee } />
        <Route exact path="/link" component={ LinkEmployees } />
        <Route exact path="/delete" component={ DeleteEmployee } />
      </Switch>

      <Footer content="© 2020 Copyright: office-manager-app.com" />
    </div>
  );
}

export default App;
