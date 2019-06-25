import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventList from './pages/EventList.js'
import Event from './components/Event.js'


class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route exact path="/event/new" render={props => <Event {...props} isNewEvent={true} />}/>
          <Route exact path="/event/:id" component={Event} />
        </Switch>
      </Router>
    )
  }
}

export default App;
