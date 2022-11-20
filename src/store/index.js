import Vue from "vue";
import Vuex from "vuex";
import { findMinDuraction, findTransfers } from "@/utilits/methods";

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
    async fetchTickets({ commit, dispatch }) {
      try {
        const { searchId } = await fetch(
          "https://front-test.dev.aviasales.ru/search"
        ).then((response) => response.json());
        const response = await fetch(
          `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`
        ).then((response) => response.json());

        const tickets = response.tickets.map((ticket) => {
          const minDuraction = findMinDuraction(ticket);
          const optimalRatio = ticket.price / minDuraction;
          const transfers = findTransfers(ticket);
          return {
            ...ticket,
            minDuraction,
            optimalRatio,
            transfers,
          };
        });
        commit("FETCH_SUCCESS", tickets);
      } catch (e) {
        commit("FETCH_ERROR");
        dispatch("fetchTickets");
      }
    },
  },
  mutations: {
    FETCH_SUCCESS(state, resp) {
      state.tickets.status = "success";
      state.tickets.data = resp;
    },
    FETCH_ERROR(state) {
      console.warn(
        "Some error. Don't worry we fetch new tickets for you. Enjoy!"
      );
      state.tickets.status = "error";
      state.tickets.data = [];
    },
  },
});
