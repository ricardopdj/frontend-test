import React from 'react';

function EventFeatCard(props) {
  const { event } = props
  return (
    <div className="card mb-5">
      <div className="row no-gutters">
        <div className="col-2">
          <img src={event.eventImage} className="card-img" alt="..."/>
        </div>
        <div className="col-10">
          <div className="card-body">
            <h5 className="card-title">{event.title} <small>{event.dates ? event.dates[0] : null}</small></h5>
            <p className="card-text card-desc">{event.description}</p>
            <p className="card-text"><small className="text-muted">{event.location}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventFeatCard;
