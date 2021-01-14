<template>
  <div class="select-box">
    <input
      list="brandi-list"
      class="custom-select"
      type="text"
      v-model="optName"
      placeholder="입력하세요"
    />
    <datalist id="brandi-list">
      <option value="브랜디">브랜디</option>
      <option value="하이버">하이버</option>
      <option value="헬피">헬피</option>
    </datalist>
    <div class="info-box">
      <div class="info-list">
        <div><img :src="imgSrc" width="300px" /></div>
        <div class="title-data">{{ titleData }}</div>
        <div class="text">{{ text }}</div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      optName: "",
      optionList: [
        {
          name: "브랜디",
          imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
          titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
          text: "www.brandi.co.kr",
        },
        {
          name: "하이버",
          imgSrc:
            "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
          titleData: "하이버 - 예쁜 남자옷 모음",
          text: "www.hiver.co.kr",
        },
        {
          name: "헬피",
          imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
          titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
          text: "www.helpi.co.kr",
        },
      ],

      imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",

      titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다.",

      text: "www.brandi.co.kr",
    };
  },
  watch: {
    optName: function () {
      const options = this.optionList;
      for (let option of options) {
        if (this.optName == option.name) {
          this.imgSrc = option.imgSrc;
          this.titleData = option.titleData;
          this.text = option.text;
        }
      }
    },
  },
};
</script>

<style lang='scss'>
.select-box {
  display: flex;
  flex-direction: column;

  .custom-select {
    width: 200px;
    height: 25px;
  }

  .info-box {
    display: flex;

    .info-list {
      border: 1px solid gainsboro;
      text-align: center;

      .title-data {
        font-size: 10pt;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 3px;
      }

      .text {
        font-size: small;
        margin-bottom: 10px;
        color: grey;
      }
    }
  }
}
</style>