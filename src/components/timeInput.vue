<template>
  <div>
    <input
      ref="hour"
      type="text"
      v-model="hour"
      @input="timeChecker"
      placeholder="시간"
    />
    :
    <input
      ref="minute"
      type="text"
      v-model="minute"
      @input="timeChecker"
      placeholder="분"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      hour: "",
      minute: "",
      result: "",
    };
  },
  watch: {
    value() {
      this.hour = this.value.substr(0, 2);
      this.minute = this.value.substr(3, 5);
    },
  },
  props: {
    value: "",
  },
  methods: {
    timeChecker(e) {
      let value = e.target.value;
      if (value == this.hour) {
        if (value.length === 1) {
          this.hour = "0" + value;
        } else if (value > 23) {
          this.hour = "23";
        } else if (value.length > 2) {
          this.hour = value.substr(1, 3);
        } else if (value < 0) {
          this.hour = "00";
        }
      } else if (value == this.minute) {
        let value = e.target.value;
        if (value.length === 1) {
          this.minute = "0" + value;
        } else if (value > 59) {
          this.minute = "59";
        } else if (value.length > 2) {
          this.minute = value.substr(1, 3);
        }
      }
      this.result = this.hour + ":" + this.minute;
      this.$emit("input", this.result);
    },
  },
};
</script>

<style lang='scss'>
.time {
  .hour {
    width: 50px;
  }

  .minute {
    width: 50px;
  }
}
</style>