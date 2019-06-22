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

function show(id) {
  return fetch(`${baseURL}/${id}`)
  .then(res => res.json())
  .catch(err => {
    throw err
  });
}

// function create() {
//   return post(`${baseURL}`)
//   .then(res => res.json())
//   .catch(err => {
//     throw err
//   });
// }

const EventAPI = { get, getFeat, show };
export default EventAPI;