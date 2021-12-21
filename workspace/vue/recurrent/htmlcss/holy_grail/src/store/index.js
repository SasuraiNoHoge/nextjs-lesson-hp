import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoList: [],
  },
  mutations: {
    updateVideoList(state, videoList) {
      state.videoList = videoList;
    },
  },
  actions: {
    search({ commit }, request) {
      axios
        .get(`https://www.googleapis.com/youtube/v3/search?`, {
          params: request.params,
        })
        .then((response) => {
          const items = response.data.items;
          const videoList = [];

          items.forEach((item) => {
            videoList.push({
              videoId: item.id.videoId,
              publishedAt: item.snippet.publishedAt,
              title: item.snippet.title,
              description: item.snippet.description,
              image: item.snippet.thumbnails.high.url,
              channelTitle: item.snippet.channelTitle,
            });
          });
          commit("updateVideoList", videoList);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  modules: {},
});
