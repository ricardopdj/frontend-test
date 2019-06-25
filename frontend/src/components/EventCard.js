import React from 'react';
import { Link } from "react-router-dom";

function EventCard(props) {
  const { event } = props
  return (
    <div className="col-sm-6 col-md-6">
      <div className="card card-event">
        <div className="card-header">
          <span>{event.dates ? event.dates[0] : null}</span>
        </div>
        <img src={event.eventImage} className="card-img-top" alt="..."/>
        <div className="card-body flex-grow-0">
          <h5 className="card-title mb-0">{event.title}</h5>
        </div>
        <div className="card-footer">
          <Link to={`/event/${event.id}`} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard;
