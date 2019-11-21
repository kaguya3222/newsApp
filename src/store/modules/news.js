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
    mutateNews(state, payLoad) {
      payLoad.forEach(el => {
        state.news.push(el);
      });
    }
  },
  actions: {
    addNews(store, payLoad) {
      store.commit("mutateNews", payLoad);
    }
  }
};
