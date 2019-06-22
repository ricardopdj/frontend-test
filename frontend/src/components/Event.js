import React from 'react';

function Event(props) {
  const { event, feat } = props

  if (feat) {
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
  } else {
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
            <a href={event.id} className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Event;
