<template>
    <div class="custom-div">
        <select class="custom-select" v-model="optList">
                <option value="tomonari">토모나리</option>
                <option value="hiver">하이버</option>
                <option value="musinsa">무신사</option>
        </select>
        <div class="info-box">
            <ul class='info-list'>
                <li><img :src="imgSrc" width=300px /></li>
                <li>{{titleData}}</li>
                <li>{{text}}</li>
            </ul> 
        </div>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            optList:'tomonari',
            items: {
                tomonari: {
                    imgSrc : "https://image.auction.co.kr/itemimage/15/be/7b/15be7bd436.jpg",
                    titleData : "토모나리 : 2010년대 인기를 끌었던 재팬영스트릿 스타일 쇼핑몰",
                    text : "http://www.tomonari.co.kr/"
                },
                hiver: {
                    imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
                    titleData: "하이버 : 남자를 위한 모든것이 있는 맨즈 종합커머스",
                    text: "www.hiver.co.kr"
                },
                musinsa: {
                    imgSrc: "https://image.musinsa.com/data/gift/2020100713381500000005521.jpg",
                    titleData: "말이 필요 없는 최고의 남성 종합 의류커머스",
                    text: "http://musinsa.com/"
                }
            },

            imgSrc:'https://image.auction.co.kr/itemimage/15/be/7b/15be7bd436.jpg',

            titleData:'토모나리 : 2010년대 인기를 끌었던 재팬영스트릿 스타일 쇼핑몰',

            text:'http://www.tomonari.co.kr/'

        }
    },
    watch: {
        optList : function(listchange){
            const itemname = this.optList
            if(itemname){
                this.imgSrc = this.items[itemname].imgSrc;
                this.titleData = this.items[itemname].titleData;
                this.text = this.items[itemname].text;
            }
        }
    }
}
</script>

<style lang='scss'>
    .custom-select{
        width : 100px;
        height: 25px;
    }

    .info-list{
        list-style: none; 
    }
    
    .info-box{
        margin : 0;
    }
</style>