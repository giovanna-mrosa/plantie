import axios from 'axios'

const api = axios.create({
  baseURL: 'https://plantsapiecomm.herokuapp.com/',
})

export default api
