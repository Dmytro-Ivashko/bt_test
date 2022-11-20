<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/imgs/logo.png" alt="Site logo" />
    </header>
    <aside>
      <TransferFilter :active-transfer="activeTransfer" />
      <section>
        <TabsFilter :active-tab="activeTab" />
        <AirTicket v-for="(ticket, i) in tickets" :key="i" :ticket="ticket" />
        <button v-if="tickets.length" @click="addMore()">
          Показать еще 5 билетов!
        </button>
      </section>
    </aside>
  </div>
</template>

<script>
import AirTicket from "@/components/AirTicket.vue";
import TabsFilter from "@/components/TabsFilter.vue";
import TransferFilter from "@/components/TransferFilter.vue";
// import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    AirTicket,
    TabsFilter,
    TransferFilter,
  },
  data() {
    return {
      activeTab: "cheapest",
      activeTransfer: [],
      toShow: 5,
    };
  },
  created() {
    this.$on("change-tab", (newTab) => {
      this.activeTab = newTab;
    });
    this.$on("change-transfer", (transfer) => {
      this.activeTransfer = transfer;
    });
  },
  mounted() {
    this.$store.dispatch("fetchTickets");
  },
  computed: {
    tickets: function () {
      const sortedTickets = [...this.$store.getters.getTickets].sort((a, b) => {
        const sortType = this.activeTab;
        switch (sortType) {
          case "fastest":
            return a.minDuraction - b.minDuraction;
          case "optimal":
            return a.optimalRatio - b.optimalRatio;
          default:
            return a.price - b.price;
        }
      });
      const showAll =
        this.activeTransfer.includes(-1) || !this.activeTransfer.length;
      const filteredTickets = showAll
        ? sortedTickets
        : sortedTickets.filter((ticket) => {
            let newElement = ticket.transfers.filter((x) =>
              this.activeTransfer.includes(x)
            );
            return newElement.length;
          });

      return [...filteredTickets].slice(0, this.toShow);
    },
  },
  methods: {
    addMore() {
      this.toShow += 5;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

aside {
  display: flex;
  justify-content: center;
  // min-height: 100%;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
header {
  display: flex;
  justify-content: center;
  img {
    width: 60px;
    padding: 60px 0;
  }
}
button {
  width: 502px;
  height: 50px;
  background: #2196f3;
  border-radius: 5px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  margin: 20px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
