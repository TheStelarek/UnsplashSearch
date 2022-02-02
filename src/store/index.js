import Vue from 'vue'
import Vuex from 'vuex'
import UnsplashService from '../services/UnsplashService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    photo: null,
    numbers: [3, 5, 10, 20, 30]
  },
  mutations: {
    SET_PHOTOS(state, photos) {
      state.photos = photos
    },
    SET_PHOTO(state, photo) {
      state.photo = photo
      console.log(photo)
    }
  },
  actions: {
    fetchPhotos({ commit, dispatch }, { query, perPage }) {
      UnsplashService.getPhotos(query, perPage).then(response => {
        commit('SET_PHOTOS', response.data.results)
      })
    },
    fetchPhoto({ commit, getters, dispatch }, id) {
      const photo = getters.getPhotoById(id)
      if (photo) {
        commit('SET_PHOTO', photo)
      } else {
        UnsplashService.getPhoto(id).then(response => {
          commit('SET_PHOTO', response.data)
        })
      }
    }
  },
  getters: {
    getPhotoById: state => id => {
      return state.photos.find(photo => photo.id === id)
    }
  }
})
