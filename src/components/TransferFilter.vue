<template>
  <div class="filter-wrapper">
    <div class="filter-header">Количество пересадок</div>
    <div class="filter-list" v-for="transfer in transfers" :key="transfer.id">
      <input
        type="checkbox"
        :id="transfer.id"
        :value="transfer.id"
        v-model="selectedFiler"
      />
      <label :for="transfer.id"> <span></span> {{ transfer.label }} </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "TransferFilter",
  props: {
    activeTransfer: {
      type: Array,
      default: () => ["all"],
    },
  },
  data() {
    return {
      selectedFiler: ["all"],
      transfers: [
        {
          id: "all",
          label: "Все",
        },
        {
          id: "without",
          label: "Без пересадок",
        },
        {
          id: "one_transfer",
          label: "1 пересадка",
        },
        {
          id: "two_transfer",
          label: "2 пересадки",
        },
        {
          id: "three_transfer",
          label: "3 пересадки",
        },
      ],
    };
  },
  watch: {
    selectedFiler(newFilter, oldFilter) {
      let newElement = newFilter.filter((x) => !oldFilter.includes(x));
      console.log(newElement);
      if (newElement.includes("without")) this.selectedFiler = newElement;
      if (newElement.includes("all"))
        this.selectedFiler = [
          "all",
          "without",
          "one_transfer",
          "two_transfer",
          "three_transfer",
        ];
      this.$parent.$emit("change-transfer", this.selectedFiler);
    },
  },
};
</script>
<style lang="scss" scoped>
.filter-wrapper {
  width: 232px;
  height: 252px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  // padding: 20px;
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
  padding: 20px 0 0 20px;
}
.filter-list {
  text-align: center;
  display: inline-block;
}
label {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4a4a4a;
  padding-left: 20px;
}
.filter-list:hover {
  background-color: #f1fcff;
  cursor: pointer;
}
input {
  visibility: hidden;
}

label > span {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid #9abbce;
  margin-right: 10px;
  border-radius: 2px;
}

input:checked + label > span {
  border: 1px solid #2196f3;
}

input:checked + label > span::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 25px;
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
