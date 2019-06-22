const baseURL = "http://localhost:3000/events";

function get() {
  return fetch(`${baseURL}`)
  .then(res => res.json())
  .catch(err => {
    throw err
  });
}

function getFeat() {
  return fetch(`${baseURL}/featured`)
  .then(res => res.json())
  .catch(err => {
    throw err
  });
}

// show = (id) => fetch(`${baseURL}/${id}`)
// .then(res => res.json())
// .catch(err => {
//   throw err
// });

// create = (id) => post(`${baseURL}`)
// .then(res => res.json())
// .catch(err => {
//   throw err
// });

const EventAPI = { get, getFeat };
export default EventAPI;