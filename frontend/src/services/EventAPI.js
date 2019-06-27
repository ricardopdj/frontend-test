import { create } from 'apisauce'

const EventAPI = create({
  baseURL: 'http://localhost:3000/events'
})

EventAPI.addResponseTransform(response => {
  if (!response.ok) throw response;
})

export default EventAPI;