<template>
<div id="app">
  <div class="message">
    <img class="brandi-logo" src = 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/70/e4/6b/70e46b71-3b93-744a-387b-84cfb1f8cc5c/source/256x256bb.jpg' />
    {{ message }}
  </div>
  <div class="app-box">
    <div class="navbar">
      <ul>
      <li><router-link to="/" exact-active-class="home">Home</router-link></li>
      <li><router-link to="/axios" exact-active-class="axios">axios</router-link></li>
      <li><router-link to="/computed" exact-active-class="computed">computed</router-link></li>
      <li><router-link to="/event" exact-active-class="event">event</router-link></li>
      <li><router-link to="/mixin" exact-active-class="mixin">mixin</router-link></li>
      <li><router-link to="/ref" exact-active-class="ref">ref</router-link></li>
      <li><router-link to="/routing" exact-active-class="routing">routing</router-link></li>
      <li><router-link to="/watch" exact-active-class="watch">watch</router-link></li>
      <li><router-link to="/vuex" exact-active-class="vuex">vuex</router-link></li>
      <li><router-link to="/datalist" exact-active-class="datalist">datalist</router-link></li>
      <li><router-link to="/nexttick" exact-active-class="nexttick">nexttick</router-link></li>
      <li><router-link to="/vmodel" exact-active-class="vmodel">vmodel</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
</div>
  <!-- 라우트 아울렛 -->
  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello brandi!',
    };
  },
};
</script>


<style lang='scss'>
#app{
  .brandi-logo{
    width: 35px;
    height: 35px;
  }
  .message {
    font-size: 40px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #ff204b;
    text-align: center;
    margin : 50px;
  }

  .app-box {
  width: 90%;
  height: 120%;
  margin: 0 auto;

    .navbar {
      ul{
        list-style: none; 
        display: flex;
        justify-content: space-between;
        border-style: solid;
        border-width: 1 0 1 0;
        border-color: gainsboro;

        li {
          margin-top: 10px;
          margin-bottom: 10px;
          margin-right: 35px;
          font-size: 16px;
          font-family: 'Roboto', sans-serif;
          

          a {
          text-decoration: none;
          font-weight: bold;
          color: black;
          &:hover{
                color: #ff204b;
                border-bottom: solid;
                border-bottom-color: #ff204b;
            }  
          }
        }

        .home {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .axios {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .computed {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .event {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .mixin {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }
        
        .ref {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .routing {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .watch {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .vuex {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .datalist {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .nexttick {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }

        .vmodel {
          color: #ff204b;
          border-bottom: solid;
          border-bottom-color: #ff204b;
        }
      }
    }
  }
}
</style> 