<template>
  <div class="kingdiv">
    <div class="key-event">
      <b>Key event</b><br />
      <input
        class="input-box"
        type="text"
        v-on:input="typing"
        v-bind:value="message"
        placeholder="input event"
        @keyup="keycheck"
      />
      <div class="text-box">{{ message }}<br />{{ keyeventBox }}</div>
    </div>
    <div class="mouse-event">
      <b>Mouse event</b>
      <div class="point-box" ref="pointbox" @mousemove="locationcheck"></div>
      <div class="location-box">현재 X좌표 : {{ x }} Y좌표 : {{ y }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      keyeventBox: [],
      x: 0,
      y: 0,
    };
  },
  methods: {
    typing: function (event) {
      this.message = event.target.value;
    },
    keycheck: function () {
      this.keyeventBox.push(event.keyCode);
      if (event.keyCode === 8) {
        this.keyeventBox.pop();
        this.keyeventBox.splice(0, 1);
        if (!this.message) {
          this.keyeventBox = [];
        }
      }
    },
    locationcheck: function (e) {
      this.x = e.pageX;
      this.y = e.pageX;
    },
  },
};
</script>

<style scoped lang='scss'>
.kingdiv {
  display: flex;
  .key-event {
    width: 400px;
    margin-top: 10px;
    .input-box {
      width: 200px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .text-box {
      width: 200px;
      border: solid 1px;
      border-color: gainsboro;
      word-break: break-all;
    }
  }
  .mouse-event {
    width: 400px;
    margin-top: 10px;
    .point-box {
      width: 300px;
      height: 400px;
      margin-top: 5px;
      margin-bottom: 5px;
      border: solid 1px;
      border-color: gainsboro;
      &:hover {
        border: solid 2px;
        border-color: red;
      }
    }
    .location-box {
      width: 300px;
      height: 50px;
      border: solid 1px;
      border-color: gainsboro;
      text-align: center;
    }
  }
}
</style>