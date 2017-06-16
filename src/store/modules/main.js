import iqiyi from '@/utils/iqiyi';

const state = {
  channels: [],
  recommends: [],
  carousel: [],
  videoList: {}
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
  },
  async updateVideoList ({commit}, {name, mode}) {
    let result = await iqiyi.getChannelDetail(name, mode);
    commit('updateVideoList', {
      channel: name,
      list: result.video_list
    });
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
  },
  updateVideoList (state, {channel, list}) {
    state.videoList[channel] = list;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
