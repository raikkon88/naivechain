import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './screens/home.screen'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

axios.defaults.baseURL = "http://" + window.location.hostname + ":3001"

console.log(axios.defaults.baseURL)

function App() {
  return (
    <Router>
      <Grid container>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
