import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { TwitterShareButton } from 'react-share';

function EventCard(props) {
  const { event } = props
  return (
    <div className="col-sm-6 col-md-6 mb-3">
      <div className="card event-card">
        <div className="card-header">
          <span>{event.dates ? event.dates[0] : "-"}</span>
          <TwitterShareButton
            url={window.location.pathname}
            title={`Im going to ${event.title} @ ${event.dates[0]}`}
            className="float-right"
          >
            <FontAwesomeIcon icon={faShareAlt}/>
          </TwitterShareButton>
        </div>
        <img src={event.eventImage} className="img-fluid" alt="..."/>
        <div className="card-body d-flex align-items-end">
          <h6 className="card-title mb-0">{event.title}</h6>
        </div>
        <div className="card-footer">
          <Link to={`/event/${event.id}`} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard;
