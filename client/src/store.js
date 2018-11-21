import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedinUser:'global user'

  },
  mutations: {
    updateLoggedUser(state,payload){
      state.loggedinUser=payload
    }
  },
  actions: {
  },
  getters:{
    get_loggedinUser(state){
      return state.loggedinUser
    }
  }
})
