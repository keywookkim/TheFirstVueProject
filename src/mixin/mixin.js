const myMixin = {
    methods: {
        cardClick: function () {
            alert('mixin을 적용하셨습니다.')
        }
    },
    data() {
        return {
            brandi: {
                imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
                titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
                text: "www.brandi.co.kr"
            }
        }
    }
};
export default myMixin;