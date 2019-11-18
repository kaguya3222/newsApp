export default {
  state: {
    news: [
      {
        title: "Our first news card",
        smallDescription: "Small description text"
      },
      {
        title: "Our second news card",
        smallDescription: "Small description text"
      },
      {
        title: "Our second news card",
        smallDescription: "Small description text"
      },
      {
        title: "Our second news card",
        smallDescription: "Small description text"
      },
      {
        title: "Our second news card",
        smallDescription: "Small description text"
      },
      {
        title: "Our second news card",
        smallDescription: "Small description text"
      }
    ]
  },
  getters: {
    news(state) {
      return state.news;
    }
  }
};
