import { create } from 'apisauce'

const EventAPI = create({
  baseURL: 'http://localhost:3000/events'
})

export default EventAPI;