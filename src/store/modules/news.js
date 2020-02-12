export default {
  state: {
    news: []
  },
  getters: {
    news(state) {
      return state.news;
    }
  },
  mutations: {
    addNewsMutation(state, payLoad) {
      payLoad.forEach(el => {
        state.news.unshift(el);
      });
    },
    deleteNewsMutation(state, payLoad) {
      state.news.splice(payLoad, 1);
    }
  },
  actions: {
    addNews(store, payLoad) {
      store.commit("addNewsMutation", payLoad);
    },
    deleteNews(store, payLoad) {
      store.commit("deleteNewsMutation", payLoad);
    }
  }
};
