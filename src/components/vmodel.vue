<template>
  <div class="parent-box">
    <time-input class="testVal" v-model="testVal" />
    <button type="button" @click="setNowDate">현재시간으로</button>
  </div>
</template>

<script>
import TimeInput from "./timeInput.vue";

export default {
  components: {
    TimeInput,
  },

  data() {
    return {
      testVal: "",
    };
  },

  methods: {
    setNowDate() {
      let today = new Date();
      let hour = today.getHours();
      let minute = today.getMinutes();
      this.testVal = hour + ":" + minute;
    },
  },

  created() {},
};
</script>

<style lang='scss'>
</style>
