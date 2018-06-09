import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentPath: [],
    openedSubmenuArr: []
  },
  mutations: {
    setCurrentPath (state, pathArr) {
      state.currentPath = pathArr
    },
    addOpenSubmenu (state, name) {
      if (state.openedSubmenuArr.includes(name)) {
        return
      }
      if (name) {
        state.openedSubmenuArr.push(name)
      }
    }
  },
  actions: {

  },
  modules: {
    app
  }
})

export default store
