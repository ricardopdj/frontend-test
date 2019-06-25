import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EventAPI from '../services/EventAPI'
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class EventNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: null
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>opa</div>
    )
  }
}

export default EventNew;
