import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Login setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/" exact>
          <Login setLoggedIn={setLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
