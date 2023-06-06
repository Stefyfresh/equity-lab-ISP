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
  },
  getSubject(subjectID) {
    return apiClient.get('/subjects/' + subjectID)
  },
  getSubjectByName(name) {
    return apiClient.get('/subjects/name/' + name)
  },
  getExperts() {
    return apiClient.get('/experts')
  },
  getExpert(expertID) {
    return apiClient.get('/experts/' + expertID)
  },
  getExpertsbySubject(subject){
    return apiClient.get('/experts/subject/' + subject)
  }
}

