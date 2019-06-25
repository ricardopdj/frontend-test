import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EventAPI from '../services/EventAPI'
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: null,
      isLoading: true
    }
  }

  componentDidMount() {
    if (!this.props.isNewEvent) {
      this.getEvent()
    } else {
      this.setState({ isLoading: false})
    }
  }

  getEvent = async () => {
    const response = await EventAPI.show(this.props.match.params.id)
    this.setState({event: response.event, isLoading: false})
  }

  createEvent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await EventAPI.create({event: formData})
  }

  render () {
    const { event, isLoading } = this.state
    if (isLoading) {
      return <div>Loading</div>
    }

    const navbar = (
      <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faArrowCircleLeft}/>
          <span className="mx-2">Events</span>
        </Link>
      </nav>
    )

    if (this.props.isNewEvent) {
      return (
        <div>
          { navbar }
          <form onSubmit={this.createEvent}>
            <div className="container-fluid px-4 py-4">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <input type="text" name="title" className="form-control" placeholder="Event Name"/>
                  <textarea name="description" className="form-control" rows="10" />
                </div>
                <div className="col-12 col-lg-4 px-2">
                  <table className="table mt-3">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <button
                className="btn btn-primary float-right m-3"
                title="Save Event">
                <FontAwesomeIcon icon={faSave}/>
              </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          { navbar }
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
}

export default Event;
