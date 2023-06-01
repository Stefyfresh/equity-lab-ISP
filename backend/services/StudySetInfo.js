import axios from 'axios'
 
const apiClient = axios.create({
  baseURL: 'https://api.equitylab.io',
  withCredentials: false,
  headers: {
    Accept: 'application/bson',
    'Content-Type': 'application/bson'
  }
})
 
export default {
  getSubjects() {
    return apiClient.get('/subjects')
  }
}

