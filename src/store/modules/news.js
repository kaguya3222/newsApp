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
        state.news.push(el);
      });
    },
    deleteNewsMutation(state, payLoad) {
      const reversedNews = state.news.slice().reverse();
      reversedNews.splice(payLoad, 1);
      state.news = reversedNews.slice().reverse();
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
