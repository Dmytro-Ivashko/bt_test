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
  box-sizing: border-box;
  width: 502px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
  .tab {
    width: 100%;
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
    color: #ffffff;
  }
}
</style>
