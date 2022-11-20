import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: {
      data: [],
      status: "",
    },
  },
  getters: {
    getTickets: (state) => state.tickets.data,
  },
  actions: {
    async fetchTickets({ commit }) {
      try {
        const { searchId } = await fetch(
          "https://front-test.dev.aviasales.ru/search"
        ).then((response) => response.json());
        const response = await fetch(
          `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`
        ).then((response) => response.json());
        commit("FETCH_SUCCESS", response.tickets);
      } catch (e) {
        commit("FETCH_ERROR");
      }
    },
  },
  mutations: {
    FETCH_SUCCESS(state, resp) {
      state.tickets.status = "success";
      state.tickets.data = resp;
    },
    FETCH_ERROR(state) {
      console.log("error");
      state.tickets.status = "error";
      state.tickets.data = [];
    },
  },
});
