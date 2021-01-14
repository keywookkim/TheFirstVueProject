<template>
  <div class="info">
    <div class="input-box">
      <input
        class="name"
        ref="name"
        type="text"
        placeholder="이름"
        v-model="info.name"
      />
      <input
        class="age"
        ref="age"
        type="text"
        placeholder="나이"
        v-model="info.age"
      />
      <input
        class="job"
        ref="job"
        type="text"
        placeholder="직업"
        v-model="info.job"
      />
      <button class="check" type="button" @click="doCheck">확인</button>
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
    sendInfo() {
      if (this.info.name && this.info.age && this.info.job) {
        store.commit("setInfo", this.info);
      }
    },
    doCheck() {
      if (!this.info.name) {
        this.$refs.name.focus();
      } else if (!this.info.age) {
        this.$refs.age.focus();
      } else if (!this.info.job) {
        this.$refs.job.focus();
      } else if (this.info.name && this.info.age && this.info.job) {
        alert("모두 입력되었습니다!");
        this.sendInfo();
      }
    },
  },
};
</script>

<style lang='scss'>
.info {
  .input-box {
    display: flex;
    vertical-align: middle;
    flex-direction: column;
    margin-top: 35px;

    .name {
      width: 20%;
      margin: 6px;
      padding: 4px;
    }

    .age {
      width: 20%;
      margin: 6px;
      padding: 4px;
    }

    .job {
      width: 20%;
      margin: 6px;
      padding: 4px;
    }

    .check {
      width: 20%;
      margin: 6px;
      padding: 4px;
      color: white;
      background-color: #ff204b;
    }
  }
}
</style>