import { createStore } from 'vuex';

export default createStore({
  state: {
    playerName: '',
  },
  mutations: {
    setPlayerName(state, playerName) {
      state.playerName = playerName;
    },
  },
  actions: {
    updatePlayerName({ commit }, playerName) {
      commit('setPlayerName', playerName);
    },
  },
  getters: {
    getPlayerName(state) {
      return state.playerName;
    },
  },
});
