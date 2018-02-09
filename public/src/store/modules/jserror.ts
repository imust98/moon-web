import Vue from 'vue';
import {
  MutationTree,
  ActionTree,
  ActionContext,
  Module,
  GetterTree
} from 'vuex';
import fetch from '../../fetch';

/**
 * Interfaces
 */
interface IJsErrorState {
  entry: {};
}

/**
 * State
 */
const states: IJsErrorState = {
  entry: {
    ablist:[],
    errordetail:{}
  }
};

/**
 * Getters
 */
const getters: GetterTree<IJsErrorState, any> = {};

/**
 * Actions
 */
const actions: ActionTree<IJsErrorState, any> = {
  abstructlist({ commit }: { commit: any }, payload: any) {
    fetch(
      {
        url: '/api/jserror/:appId',
        method: 'GET'
      },
      {
        params: {
          appId: payload.appId
        },
        body: payload.body
      }
    ).then((result: any) => {
      commit('JSERROR_LIST_LOAD', {
        entry: result
      });
    });
  },
  detailerror({ commit }: { commit: any }, payload: any) {
    fetch(
      {
        url: '/api/jserror/:appId/detail',
        method: 'GET'
      },
      {
        params: {
          appId: payload.appId
        },
        body: payload.body
      }
    ).then((result: any) => {
      commit('JSERROR_DETAIL_LOAD', {
        entry: result
      });
    });
  }
};

/**
 * Mutations
 */
const JSERROR_LIST_LOAD = 'JSERROR_LIST_LOAD';
const JSERROR_DETAIL_LOAD = 'JSERROR_DETAIL_LOAD';

const mutations: MutationTree<IJsErrorState> = {
  [JSERROR_LIST_LOAD](state: any, payload: any) {
    state.entry.ablist = payload.entry;
  },
  [JSERROR_DETAIL_LOAD](state: any, payload: any) {
    state.entry.errordetail = payload.entry;
  }
};


const Module: Module<IJsErrorState, any> = {
  namespaced: true,
  state: states,
  mutations,
  actions
};

export default Module;
