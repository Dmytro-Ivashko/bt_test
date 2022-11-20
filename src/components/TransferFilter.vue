<template>
  <div class="filter-wrapper">
    <div class="filter-header">Количество пересадок</div>
    <div
      class="filter-list"
      v-for="filter in filters"
      :key="filter.id"
      @click.prevent="setFilter(filter.id)"
    >
      <input
        type="checkbox"
        :id="filter.id"
        :value="filter.id"
        v-model="selectedFiler"
      />
      <label :for="filter.id"> <span></span> {{ filter.label }} </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "TransferFilter",
  props: {
    activeTransfer: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedFiler: [],
      filters: [
        {
          id: -1,
          label: "Все",
        },
        {
          id: 0,
          label: "Без пересадок",
        },
        {
          id: 1,
          label: "1 пересадка",
        },
        {
          id: 2,
          label: "2 пересадки",
        },
        {
          id: 3,
          label: "3 пересадки",
        },
      ],
    };
  },
  methods: {
    setFilter(id) {
      const isSelected = this.selectedFiler.includes(id);
      if (isSelected && id !== -1) {
        this.selectedFiler = this.selectedFiler.filter(
          (el) => el !== id && el !== -1
        );
      }
      if (!isSelected) {
        this.selectedFiler = [...this.selectedFiler, id];
      }
      if (this.selectedFiler.length === this.filters.length - 1 || id === -1) {
        this.selectedFiler = this.filters.map((el) => el.id);
      }
      if (isSelected && id === -1) this.selectedFiler = [];

      this.$parent.$emit("change-transfer", this.selectedFiler);
    },
  },
};
</script>
<style lang="scss" scoped>
.filter-wrapper {
  display: flex;
  flex-direction: column;
  width: 232px;
  height: 252px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-right: 10px;
  overflow: auto;
}
.filter-header {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4a4a4a;
  padding: 20px;
  padding-bottom: 10px;
}
.filter-list {
  display: flex;
  padding: 10px;
}
.filter-list:last-child {
  padding-bottom: 20px;
}
.filter-list:hover {
  background-color: #f1fcff;
  cursor: pointer;
}
label {
  display: flex;
  align-items: center;
  position: relative;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4a4a4a;
}

input {
  visibility: hidden;
  width: 0;
  height: 0;
}

label > span {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid #9abbce;
  margin-right: 10px;
  border-radius: 2px;
  box-sizing: border-box;
}

input:checked + label > span {
  border: 1px solid #2196f3;
}

input:checked + label > span::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 5px;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  animation: checked-box 125ms 125ms forwards;
}

@keyframes checked-box {
  0% {
    width: 0;
    height: 0;
    border-color: #2196f3;
    transform: translate(0, 0) rotate(45deg);
  }
  33% {
    width: 4px;
    height: 0;
    border-color: #2196f3;
    transform: translate(0, 0) rotate(45deg);
  }
  100% {
    width: 4px;
    height: 8px;
    border-color: #2196f3;
    transform: translate(0, -8px) rotate(45deg);
  }
}
</style>
