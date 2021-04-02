// initial state
const state = () => ({
  user: {
    name: 'Ben'
  },
  loggedIn: true
})

// getters
const getters = {
  getUsername (state) {
    return state.user.name
  }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
