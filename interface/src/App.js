import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './screens/home.screen'
import Validate from './screens/validate.screen'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

axios.defaults.baseURL = "http://" + window.location.hostname + ":3001"

function App() {
  return (
    <Router>
      <Grid container>
        <Grid item xs={12} style={{ margin:"20px"}}>
          <Link to="/" variant="outlined" style={{ margin:"10px", textDecoration:"none", color: "blue"}}>Home</Link>
          <Link to="/validate" variant="outlined" style={{ margin:"10px", textDecoration:"none", color: "blue"}}>Validate</Link>
        </Grid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/validate" component={Validate} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
