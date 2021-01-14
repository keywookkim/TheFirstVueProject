import 'es6-promise/auto'
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        info: {
            name: '',
            age: '',
            job: ''
        }
    },
    mutations: {
        setInfo(state, payload) {
            state.info = payload
        }
    },
}
);