import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global';
import jserror from './modules/jserror';
import { install as fetchInstall } from '../fetch';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules:{
    global,
    jserror
  }
});

/**
 * install fetch
 */
fetchInstall(store);

export default store;
