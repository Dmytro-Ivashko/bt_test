<template>
  <div id="app">
    <HomeView />
  </div>
</template>
<script>
import HomeView from "@/views/HomeView.vue";

export default {
  components: {
    HomeView,
  },
};
</script>
<style lang="scss">
@import "assets/scss/app.scss";

#app {
  background-color: #f3f7fa;
  height: 100%;
}
</style>
