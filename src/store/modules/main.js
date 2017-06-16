import iqiyi from '@/utils/iqiyi';

const state = {
  channels: [],
  recommends: [],
  carousel: []
};

const getters = {};

const actions = {
  async updateChannels ({commit}) {
    let channels = await iqiyi.getChannels();
    commit('updateChannels', channels);
  },
  async updateRecommend ({commit}) {
    let recommends = await iqiyi.getRecommends();
    commit('updateCarousel', recommends[0].video_list);
    recommends.splice(0, 1);
    commit('updateRecommend', recommends);
  }
};

const mutations = {
  updateChannels (state, channels) {
    state.channels = channels;
  },
  updateRecommend (state, recommends) {
    state.recommends = recommends;
  },
  updateCarousel (state, carousel) {
    state.carousel = carousel;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
