import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import EventAPI from './services/EventAPI'
import EventList from './pages/EventList.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      eventsFeat: []
    }
  }

  componentDidMount() {
    this.getEvents()
    this.getEventsFeat()
  }

  getEvents = async () => {
    const response = await EventAPI.get()
    this.setState({events: response.events})
  }

  getEventsFeat = async () => {
    const response = await EventAPI.getFeat()
    this.setState({eventsFeat: response.events})
  }


  render() {
    const { events, eventsFeat } = this.state
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light px-4">
          <a className="navbar-brand" href="#">Events</a>
        </nav>
        <EventList events={events} eventsFeat={eventsFeat} />
      </div>
    )
  }
}

export default App;
