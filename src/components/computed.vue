<template>
  <div class="box">
    <div class="parent-box">
      <div class="computer">
        <div class="coupon-box">
          <input
            type="checkbox"
            id="coupon"
            value="쿠폰 할인"
            @click="clickChanger('coupon')"
          />
          <label for="coupon">쿠폰 할인</label>
          <input
            class="discount"
            ref="coupon"
            type="number"
            min="0"
            v-model="couponDiscount"
            disabled
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="normal"
            value="일반 할인"
            @click="clickChanger('normal')"
          />
          <label for="normal">일반 할인</label>
          <input
            class="discount"
            ref="normal"
            type="number"
            min="0"
            max="100"
            v-model="normalDiscount"
            disabled
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="evt"
            value="이벤트 할인"
            @click="clickChanger('evt')"
          />
          <label for="evt">이벤트 할인</label>
          <input
            class="discount"
            ref="evt"
            type="number"
            min="0"
            max="100"
            v-model="eventDiscount"
            disabled
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="staff"
            value="직원 할인"
            @click="clickChanger('staff')"
          />
          <label for="staff">직원 할인</label>
          <input
            class="discount"
            ref="staff"
            type="number"
            min="0"
            max="100"
            v-model="staffDiscount"
            disabled
          />
        </div>
        <div>
          원가 :
          <input
            type="text"
            ref="original"
            value="original"
            v-model="originalPrice"
          />
        </div>
      </div>
      <div class="display">
        <img
          class="image"
          src="https://image.brandi.me/cproduct/2020/10/17/21141610_1602936769_image1_L.jpg"
        />
        <div class="discount-box">
          <div class="discount-list">
            <div v-if="is_coupon_clicked">
              쿠폰적용가 {{ couponDiscount }}원
            </div>
            <div v-if="is_normal_clicked">일반 할인 {{ normalDiscount }}%</div>
            <div v-if="is_evt_clicked">이벤트 할인 {{ eventDiscount }}%</div>
            <div v-if="is_staff_clicked">직원 할인 {{ staffDiscount }}%</div>
            <div v-if="originalPrice" class="original-price">{{ price }}원</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponDiscount: 1000,
      normalDiscount: 10,
      eventDiscount: 10,
      staffDiscount: 10,
      originalPrice: "",
      is_coupon_clicked: false,
      is_normal_clicked: false,
      is_evt_clicked: false,
      is_staff_clicked: false,
    };
  },

  methods: {
    clickChanger(val) {
      if (val == "coupon") {
        this.is_coupon_clicked = !this.is_coupon_clicked;
        this.$refs.coupon.disabled = !this.$refs.coupon.disabled;
      } else if (val == "normal") {
        this.is_normal_clicked = !this.is_normal_clicked;
        this.$refs.normal.disabled = !this.$refs.normal.disabled;
      } else if (val == "evt") {
        this.is_evt_clicked = !this.is_evt_clicked;
        this.$refs.evt.disabled = !this.$refs.evt.disabled;
      } else if (val == "staff") {
        this.is_staff_clicked = !this.is_staff_clicked;
        this.$refs.staff.disabled = !this.$refs.staff.disabled;
      }
    },

    setDiscountNum(val) {
      if (parseInt(val) > 100) {
          val = 100
      } else if (parseInt(val) < 0) {
        val = 0
      } else {
        val = val
      }
      return val
    }
  },

  watch: {
    // originalPrice(val) {
    //   //watch에서 무한루프 오류 해결을 위해 nextTick 활용
    //   let result = val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   this.$nextTick(() => (this.originalPrice = result));
    // },
    normalDiscount(){
      this.normalDiscount = this.setDiscountNum(this.normalDiscount)
    },
    originalPrice(){
      if(parseInt(this.originalPrice)<1){
        this.originalPrice = 100
      }
    }
  },

  computed: {
    price() {
      let originalPrice = parseInt(this.originalPrice);
      if (this.is_coupon_clicked) {
        originalPrice -= this.couponDiscount;
      }
      if (this.is_normal_clicked) {
        originalPrice -= (originalPrice * this.normalDiscount) / 100;
      }
      if (this.is_evt_clicked) {
        originalPrice -= (originalPrice * this.eventDiscount) / 100;
      }
      if (this.is_staff_clicked) {
        originalPrice -= (originalPrice * this.staffDiscount) / 100;
      }
      if (originalPrice < 0) {
        originalPrice = 0
      }
      return originalPrice.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang='scss'>
.box {
  .parent-box {
    width: 500px;
    height: 325px;
    display: flex;
    justify-content: center;
    border: 2px solid gainsboro;

    .computer {
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 300px;
      border: 2px solid gainsboro;
      margin: 10px;
      overflow: hidden;
      font-size: 10pt;

      div {
        margin-bottom: 5px;
      }

      .coupon-box {
        margin-top: 10px;
      }

      .discount {
        width: 80px;
        height: 20px;
      }
    }

    .display {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 200px;
      height: 300px;
      border: 2px solid gainsboro;
      margin: 10px;

      .image {
        margin-left: 15px;
        width: 170px;
        height: 150px;
      }

      .discount-box {
        .discount-list {
          font-size: 9pt;
          list-style: none;
          font-weight: bold;
          color: #ff204b;
          width: 200px;
          height: 135px;

          div {
            background-color: #f5edf0;
            text-align: center;
            margin: 5 auto;
            width: 80%;
          }

          .original-price {
            background-color: white;
            font-size: 12pt;
            color: black;
          }
        }
      }
    }
  }
}
</style>