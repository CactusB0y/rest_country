import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_POSTS(state, posts){
      state.countries = posts
    }
  },
  actions: {
    loadCountries({commit}){
      axios
        .get(`https://restcountries.com/v2/all`)
        .then(data => {
          let posts = data.data
          commit('SET_POSTS', posts)
        })
    }
  },
  modules: {
  }
})
