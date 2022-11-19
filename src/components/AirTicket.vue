<template>
  <div class="ticket-wrapper">
    <div class="ticket-header">
      <div class="ticket-price">{{ ticket.price }} P</div>
      <div class="company-logo">
        <img
          :src="`//pics.avs.io/99/36/${ticket.carrier}.png`"
          alt="company logo"
        />
      </div>
    </div>
    <div
      class="ticket-segments"
      v-for="segment in ticket.segments"
      :key="segment.origin"
    >
      <div class="segment-wraper">
        <div class="segment-header">
          {{ segment.origin }} - {{ segment.destination }}
        </div>
        <div class="segment-data">
          {{ segment.origin }} - {{ segment.destination }}
        </div>
      </div>
      <div class="segment-wraper">
        <div class="segment-header">В пути</div>
        <div class="segment-data">
          {{ segment.origin }} - {{ segment.destination }}
        </div>
      </div>
      <div class="segment-wraper">
        <div class="segment-header">пересадки</div>
        <div class="segment-data">
          <div v-for="stop in segment.stops" :key="stop">{{ stop }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ticket: {
        price: 54347,
        carrier: "S7",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2022-11-27T12:59:00.000Z",
            stops: ["HKG"],
            duration: 1347,
          },
          {
            origin: "HKT",
            destination: "MOW",
            date: "2022-12-17T00:06:00.000Z",
            stops: ["AUH"],
            duration: 1980,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.ticket-wrapper {
  width: 502px;
  height: 184px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}
.ticket-header {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  .ticket-price {
    color: #2196f3;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
  }
}
.ticket-segments {
  display: flex;
  justify-content: space-between;
  .segment-wraper {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .segment-header {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #a0b0b9;
    text-transform: uppercase;
  }
  .segment-data {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
}
</style>
