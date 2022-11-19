<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/imgs/logo.png" alt="Site logo" />
    </header>
    <aside>
      <TransferFilter />
      <section>
        <TabsFilter />
        <AirTicket />
        <AirTicket />
        <AirTicket />
        <AirTicket />
        <AirTicket />
        <AirTicket />
        <AirTicket />
        <AirTicket />
      </section>
    </aside>
  </div>
</template>

<script>
import AirTicket from "@/components/AirTicket.vue";
import TabsFilter from "@/components/TabsFilter.vue";
import TransferFilter from "@/components/TransferFilter.vue";

export default {
  name: "HomeView",
  components: {
    AirTicket,
    TabsFilter,
    TransferFilter,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 103px;
}
.wrapper {
  display: flex;
  justify-content: center;
}
aside {
  display: flex;
  justify-content: center;
}
header {
  display: flex;
  justify-content: center;
}
</style>
