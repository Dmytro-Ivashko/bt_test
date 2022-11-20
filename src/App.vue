<template>
  <div id="app">
    <TicketsView />
  </div>
</template>
<script>
import TicketsView from "@/views/TicketsView.vue";

export default {
  components: {
    TicketsView,
  },
};
</script>
<style lang="scss">
@import "assets/scss/app.scss";

body {
  background-color: #f3f7fa;
}
</style>
