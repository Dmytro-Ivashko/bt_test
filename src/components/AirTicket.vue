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
          {{ getTime(segment.date, segment.duration) }}
        </div>
      </div>
      <div class="segment-wraper">
        <div class="segment-header">В пути</div>
        <div class="segment-data">
          {{ getTimeFromMins(segment.duration) }}
        </div>
      </div>
      <div class="segment-wraper">
        <div class="segment-header">
          <span v-if="!segment.stops.length">нет пересадок</span>
          <span v-else-if="segment.stops.length === 1">1 пересадка</span>
          <span v-else> {{ segment.stops.length }} пересадки</span>
        </div>
        <div class="segment-data">
          <span v-for="(stop, index) in segment.stops" :key="stop"
            >{{ stop }}<span v-if="index !== segment.stops.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ticket"],
  data() {
    return {};
  },
  methods: {
    getTimeFromMins(mins) {
      let hours = Math.trunc(mins / 60);
      let minutes = mins % 60;
      return `${hours} ч ${minutes} м`;
    },
    getTime(timeOut, flyMin) {
      const getTimeStampOut = new Date(timeOut).getTime() / 1000;
      const getTimeStampIn = getTimeStampOut + flyMin * 60;
      return `${new Date(getTimeStampOut).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      })} - ${new Date(getTimeStampIn).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.ticket-wrapper {
  box-sizing: border-box;
  width: 502px;
  height: 184px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}
.ticket-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 36px;
  .ticket-price {
    color: #2196f3;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
  }
  img {
    height: 36px;
  }
}
.ticket-segments {
  display: flex;
  justify-content: space-between;
  .segment-wraper {
    display: flex;
    flex-direction: column;
    flex-basis: 33.33%;

    margin: 10px;
  }
  .segment-wraper:last-child {
    margin-top: 10px;
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
