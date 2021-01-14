<template>
  <div class="vuex-box">
    <img
      class="profile"
      src="https://img.insight.co.kr/static/2020/03/16/700/21575731m42t2e4pfpc8.jpg"
    />
    <div class="info-box">
      이름 : {{ info.name }} <br />
      나이 : {{ info.age }} <br />
      직업 : {{ info.job }}
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      info: {
        name: "",
        age: "",
        job: "",
      },
    };
  },
  methods: {
    getInfo: function () {
      const sInfo = store.state.info;
      if (sInfo.name && sInfo.age && sInfo.job) {
        this.info = sInfo;
      }
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style lang='scss'>
.vuex-box {
  display: flex;
  flex-direction: column;

  .profile {
    height: 400px;
    width: 300px;
  }

  .info-box {
    margin-top: 10px;
  }
}
</style>