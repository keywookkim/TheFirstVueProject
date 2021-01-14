<template>
    <div class="root-box">
        <div class="info-box">
            height: {{height}}, width: {{width}}
            <button class="text-btn" type="button" @click="makeStr">텍스트 추가하기</button> 
            <button class="size-btn" type="button" @click="getDivSize">상자크기 가져오기</button> 
        </div>
        <div class="flexible-box">
                <div id="display-box">
                    {{message}}
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            height: '',
            width: '',
            message: ''
        }
    },
    methods:{
        rndStr(len) {
            let text = " "
            let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
            for( let i=0; i < len; i++ ) {
                text += chars.charAt(Math.floor(Math.random() * chars.length))
                }
            return text
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min+1)) + min; 
        },
        getDivSize(){
            let div = document.querySelector('#display-box')
            this.height = div.clientHeight
            this.width = div.clientWidth
        },
        makeStr(){
            let rndint = this.getRandomInt(1, 15)
            let message = 'random str =' + this.rndStr(rndint)

            let parent = document.getElementById('display-box')
            let div = document.createElement('div')
            div.innerHTML += `${message}`
            let btn = document.createElement('button')
            btn.innerHTML += '제거'

            btn.addEventListener("click", (event) => {
                const btn = event.target
                parent.removeChild(btn.parentNode)
                this.$nextTick(this.getDivSize)
            })
            div.appendChild(btn)
            this.$nextTick(this.getDivSize)
            return parent.appendChild(div)
        },
    },
    created:{

    }
}
</script>

<style lang='scss'>
    .root-box{
        .info-box{
            width:50%;
        }
        
        .flexible-box{
            display: flex;
            overflow: hidden;
            height: auto;
            width: auto;

            #display-box{
                margin-top: 20px;
                border: 1px solid grey;
                
            }
        }
    }
</style>