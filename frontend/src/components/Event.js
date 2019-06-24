import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EventAPI from '../services/EventAPI'
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: null
    }
  }

  componentDidMount() {
    this.getEvent()
  }

  getEvent = async () => {
    const response = await EventAPI.show(this.props.match.params.id)
    this.setState({event: response.event})
  }

  render () {
    const { event } = this.state
    if (!event) {
      return <div>Loading</div>
    }
    return (
      <div>
        <nav className="navbar navbar-light bg-light px-4">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon={faArrowCircleLeft}/>
            <span className="mx-2">Events</span>
          </Link>
        </nav>
        <div className="container-fluid px-4 py-4">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h3>{event.title}</h3>
              <small className="d-block mb-5">{event.location}</small>
              <div>{event.description}</div>
            </div>
            <div className="col-12 col-lg-4 px-2">
              <img src={event.eventImage} className="img-fluid d-block mx-auto"></img>
              <table className="table mt-3">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    event.dates.length &&
                    event.dates.map((date, key) =>
                      <tr key={key}>
                        <td>{ format(new Date(date),'DD MMM')}</td>
                        <td>{ format(new Date(date),'hh:mm')}</td>
                        <td>$200</td>
                      </tr>
                    )
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;
