import { getPages } from "../mockData";
import { mapToKey, getUniqueValues } from "@/utils/helpers";

// initial state
const state = () => ({
  byId: {},
  allIds: [],
});

// getters
const getters = {};

// actions
const actions = {
  async fetchPages({ commit }) {
    const pages = await getPages();

    commit("receive", pages);
  },
};

// mutations
const mutations = {
  receive(state, data) {
    state.byId = mapToKey(data, "id");
    state.allIds = getUniqueValues(data, "id");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
