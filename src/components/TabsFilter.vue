<template>
  <div class="tab-wrapper">
    <div
      class="tab"
      :class="{ active: tab.id === activeTab }"
      v-for="tab in tabs"
      :key="tab.id"
      @click="$parent.$emit('change-tab', tab.id)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>
<script>
export default {
  name: "TabsFilter",
  props: {
    activeTab: {
      type: String,
      default: "cheapest",
    },
  },
  data() {
    return {
      tabs: [
        {
          id: "cheapest",
          label: "Самый дешевый",
        },
        {
          id: "fastest",
          label: "Самый быстрый",
        },
        {
          id: "optimal",
          label: "Оптимальный",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tab-wrapper {
  width: 502px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  // justify-content: space-around;
  margin-left: 23px;
  .tab {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4a4a4a;
    border: solid 1px #dfe5ec;
    background-color: #ffffff;
    width: 100%;
    cursor: pointer;
  }
  .tab:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .tab:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .active {
    background: #2196f3;
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
  }
}
</style>
