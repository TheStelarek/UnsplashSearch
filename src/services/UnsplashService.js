import axios from 'axios'

const clientId =
  'bfcbd5fd7099c636c5ef985ae2fee5bafed112d58c591a8793549bfc12cbea83'

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPhotos(query, perPage) {
    return apiClient.get(
      'search/photos?client_id=' +
        clientId +
        '&query=' +
        query +
        '&per_page=' +
        perPage
    )
  },
  getPhoto(id) {
    return apiClient.get('/photos/' + id + '?client_id=' + clientId)
  }
}
