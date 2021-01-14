<template>
        <div id="btn_group"> 
            <button class="front-btn" @click="goFront" type="button">FRONT</button> 
            <button class="back-btn" @click="goBack" type="button">BACK</button> 
            <button class="home-btn" @click="goHome" type="button">HOME</button> 
        </div> 
</template>

<script>
export default {
    methods:{
        goFront(){
            this.$router.go(1);
        },
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>