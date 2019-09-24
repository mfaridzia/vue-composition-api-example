import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {
    INCREMENT_COUNT({ commit }) {
      commit("INCREMENT_COUNT");
    },
    DECREMENT_COUNT({ commit }) {
      commit("DECREMENT_COUNT");
    }
  },
  mutations: {
    DECREMENT_COUNT(state) {
      if(state.count <= 0) return;
      state.count--;
    },
    INCREMENT_COUNT(state) {
      state.count++;
    }
  },
  getters: {
    number(state) {
      return state.count;
    }
  }
})
