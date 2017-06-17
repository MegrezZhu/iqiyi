import iqiyi from '@/utils/iqiyi';

export default {
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
  async updateVideoList ({state, commit, dispatch}) {
    if (!state.channels.length) {
      await dispatch('updateChannels');
    }
    let name = state.channels[state.currentChannel].name;
    let result = await iqiyi.getChannelDetail(name);
    commit('updateVideoList', {
      channel: state.currentChannel,
      list: result.video_list
    });
  }
};
