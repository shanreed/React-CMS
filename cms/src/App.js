import React from 'react';

import './App.css';

import Menu from './components/menu';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Customers from "./components/customers";
import AddCustomer from './components/addCustomer';
import UpdateCustomer from './components/updateCustomer';
import SignOut from './components/signOut';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers/" component={Customers} />
        <Route path="/addcustomer/" component={AddCustomer} />
        <Route path="/updatecustomer/:id" component={UpdateCustomer} />
        <Route path="/signout/" component={SignOut} />

      </Switch>
     
     
    </div>
  );
}

export default App;
