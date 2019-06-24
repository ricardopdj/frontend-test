import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EventList from './pages/EventList.js'
import Event from './components/Event.js'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={EventList}
          />
          <Route path="/:id" component={Event} />
        </div>
      </Router>
    )
  }
}

export default App;
