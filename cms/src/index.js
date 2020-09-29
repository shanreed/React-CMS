mport React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase/firebase";
import SignIn from './components/signIn';

auth().onAuthStateChanged(user => {
  if (!user) {
      ReactDOM.render(
      <SignIn></SignIn>,
       document.getElementById("root"))
  }
  else {
    ReactDOM.render(
      <React.Fragment>
        <Router>
          <App />
        </Router>
      </React.Fragment>,
      document.getElementById('root')
    );
  }
})





