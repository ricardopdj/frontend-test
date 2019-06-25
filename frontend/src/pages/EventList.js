import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EventAPI from '../services/EventAPI'
import EventCard from '../components/EventCard.js'
import EventFeatCard from '../components/EventFeatCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class EventList extends Component {
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

  render () {
    const { events, eventsFeat } = this.state
    return (
      <div>
        <nav className="navbar navbar-light bg-light px-4">
          <Link to="/" className="navbar-brand">Events</Link>
        </nav>
        <div className="container-fluid px-4 py-4">
          <div className="row">
            <div className="col-12 col-lg-8 events d-flex flex-wrap">
              <div className="row">
                { events.length && events.map((event, key) => <EventCard key={key} event={event}/> )}
              </div>
            </div>
            <div className="col-12 col-lg-4 px-2 events-feat">
              <h4 className="text-left border-bottom mb-4 pb-2">Today's Highlight</h4>
              <ul className="events-feat">
                { eventsFeat.length && eventsFeat.map((event, key) => <EventFeatCard key={key} event={event}/> )}
              </ul>
            </div>
          </div>
          <Link to="/event/new" className="btn btn-primary float-right m-3" title="Add Event">
            <FontAwesomeIcon icon={faPlus}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default EventList;
