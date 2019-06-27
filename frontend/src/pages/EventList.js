import React, { Component } from 'react';
import EventAPI from '../services/EventAPI'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import EventCard from '../components/EventCard.js'
import EventFeatCard from '../components/EventFeatCard.js'

class EventList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      eventsFeat: [],
      error: null
    }
  }

  componentDidMount() {
    this.getEvents()
    this.getEventsFeat()
  }

  getEvents = async () => {
    try {
      const response = await EventAPI.get('/')
      this.setState({events: response.data.events})
    } catch (response) {
      this.setState({error: response.originalError.message})
    }
  }

  getEventsFeat = async () => {
    try {
      const response = await EventAPI.get('/featured')
      this.setState({eventsFeat: response.data.events})
    } catch (response) {
      this.setState({error: response.originalError.message})
    }
  }

  render () {
    const { events, eventsFeat, error } = this.state

    if (error) {
      return <div className='text-center'>{error}</div>
    }

    return (
      <div>
        <nav className="navbar navbar-light bg-light px-4">
          <div className="container">
            <Link to="/" className="navbar-brand">Events</Link>
          </div>
        </nav>
        <div className="container px-4 py-4">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="row events d-flex flex-wrap">
                { events.length > 0 && events.map((event, key) => <EventCard key={key} event={event}/> )}
              </div>
            </div>
            <div className="col-12 col-lg-4 px-2 events-feat">
              <h4 className="text-left border-bottom mb-4 pb-2">Today's Highlight</h4>
              <ul className="events-feat">
                { eventsFeat.length > 0 && eventsFeat.map((event, key) => <EventFeatCard key={key} event={event}/> )}
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
