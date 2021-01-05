import { createStore } from 'vuex';


const store = createStore({
  state() {
    return {
      userId: 'c3'
    };
  },

  getters: {
    apis(state) {
      // console.log('state');
      return state.Apis;
    },
    apiGroups(state) {
      return state.ApiGroups;
    },
    stuff() {
      return 3;
    }
  },

  actions: {
    async loadApis(context) {
      var results = [
        {
          "GroupName": "Group1",
          "ApiName": "Api 1",
          "Type": "GET",
          "ApiId": "1"
        },
        {
          "GroupName": "Group1",
          "ApiName": "Api 2",
          "Type": "POST",
          "ApiId": "2"
        },
        {
          "GroupName": "Group1",
          "ApiName": "Api 3",
          "Type": "PUT",
          "ApiId": "3"
        },
        {
          "GroupName": "Group2",
          "ApiName": "Api 1-2",
          "Type": "GET",
          "ApiId": "4"
        },
        {
          "GroupName": "Group2",
          "ApiName": "Api 2-2",
          "Type": "POST",
          "ApiId": "5"

        },
        {
          "GroupName": "Group2",
          "ApiName": "Api 3-2",
          "Type": "PUT",
          "ApiId": "6"
        },
        {
          "GroupName": "Group1",
          "ApiName": "Api 7",
          "Type": "GET",
          "ApiId": "7"
        },
        {
          "GroupName": "Group1",
          "ApiName": "Api 8",
          "Type": "POST",
          "ApiId": "8"
        },
        {
          "GroupName": "Group1",
          "ApiName": "Api 9",
          "Type": "PUT",
          "ApiId": "9"
        }
      ];

      context.commit('setApis', results);
    },
    async loadApiGroups(context) {
      var apiGroups =
        [
          "Group1",
          "Group2",
          "Group3"

        ];

      context.commit('setApiGroups', apiGroups);
    }
  },
  // DO NOT CALL Mutations directly
  mutations: {
    setApis(state, payload) {
      state.Apis = payload;
    },
    setApiGroups(state, payload) {
      state.ApiGroups = payload;
    },
  }
});

export default store;