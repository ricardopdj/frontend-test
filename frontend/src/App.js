import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import EventAPI from './services/EventAPI'
import Event from './components/Event.js'

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
    const { events } = this.state
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light px-4">
          <a className="navbar-brand" href="#">Events</a>
        </nav>
        <div className="container-fluid px-4 py-4">
          <div className="row">
            <div className="col-12 col-lg-8 events d-flex flex-wrap">
              <div className="row">
                { events.length && events.map((event, key) => <Event key={key} event={event} feat={false}/> )}
              </div>
            </div>
            <div className="col-12 col-lg-4 px-2 events-feat">
              <h4 className="text-left border-bottom mb-4 pb-2">Today's Highlight</h4>
              <ul className="events-feat">
                { events.length && events.map((event, key) => <Event key={key} event={event} feat={true}/> )}

              </ul>
              <button className="btn btn-primary float-right">add</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
