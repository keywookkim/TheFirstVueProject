import Vue from "vue"
import VueRouter from "vue-router"

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

const Axios = ()   => import('../components/axios.vue')
const Computed = ()    => import('../components/computed.vue')
const Event = ()   => import('../components/event.vue')
const Home = ()    => import('../components/home.vue')
const Mixin = ()   => import('../components/mixin.vue')
const Ref = ()     => import('../components/ref.vue')
const Routing = () => import('../components/routing.vue')
const Vuex = ()    => import('../components/vuex.vue')
const Watch = ()   => import('../components/watch.vue')
const Datalist = ()=> import('../components/datalist.vue')
const NextTick = ()=> import('../components/nexttick.vue')
const Vmodel = ()  => import('../components/vmodel.vue')

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/axios", component: Axios },
    { path: "/computed", component: Computed},
    { path: "/event", component: Event },
    { path: "/", component: Home },
    { path: "/mixin", component: Mixin },
    { path: "/ref", component: Ref },
    { path: "/routing", component: Routing },
    { path: "/vuex", component: Vuex },
    { path: "/watch", component: Watch },
    { path: "/datalist", component: Datalist},
    { path: "/nexttick", component: NextTick},
    { path: "/vmodel", component: Vmodel},
  ],
})
export default router