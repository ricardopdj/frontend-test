import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Events</a>
      </nav>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col events">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col highlight">
            <h2>Today's Highlight</h2>
            <ul>
              <li>
                <img src="" alt=""/>
                <div>Event Name <small>Jul 20 @ 1930</small></div>
                <small>This is the event description</small>
                <span>Theatre x</span>
              </li>
            </ul>
            <button className="btn">add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
