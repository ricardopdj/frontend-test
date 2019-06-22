import React from 'react';
import EventCard from '../components/EventCard.js'
import EventFeatCard from '../components/EventFeatCard.js'

function EventList(props) {
  const { events, eventsFeat } = props
  return (
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
          <button className="btn btn-primary float-right">add</button>
        </div>
      </div>
    </div>
  )
}

export default EventList;
