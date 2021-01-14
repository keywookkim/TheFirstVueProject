<template>
    <div>
        <div class="mixin-box">
            <ul class='mixin-list'>
                <li><img :src="imgSrc" width=300px @click="cardClick" /></li>
                <li>{{titleData}}</li>
                <li>{{text}}</li>
            </ul> 
        </div>
    </div>
</template>

<script>
    import myMixin from '../mixin/mixin.js'

    export default {
        mixins: [myMixin],
        data() {
            return {
                imgSrc : '',
                titleData: '',
                text: ''
            }
        },
        created: function(){
                this.imgSrc = this.brandi.imgSrc;
                this.titleData = this.brandi.titleData;
                this.text = this.brandi.text;
            }
        }
</script>

<style>
    .mixin-list{
        list-style: none; 
    }
</style>