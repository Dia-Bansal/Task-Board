// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import TaskBoard from './TaskBoard';
import MenuBar from './MenuBar';
import Notes from './Notes';
import Weatherapp from './Weather';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LoginPage} />
        <Route path="/taskboard" component={TaskBoard} />
        <Route path="/menu" component={MenuBar} />
        <Route path="/" exact component={SignUp} />
        <Route path="/notes" component={Notes} />
        <Route path="/weather" component={Weatherapp} />
        <Route path="/calculator" component={Calculator}/>
      </Switch>
    </Router>
  );
}

export default App;
