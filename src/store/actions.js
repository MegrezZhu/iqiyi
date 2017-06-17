import iqiyi from '@/utils/iqiyi';
let updateChannels;

export default {
  async updateChannels ({commit}) {
    if (updateChannels) return updateChannels;
    console.log('updateChannels');
    updateChannels = iqiyi.getChannels();
    let channels = await updateChannels;
    updateChannels = null;
    commit('updateChannels', channels);
  },
  async updateRecommend ({commit}) {
    console.log('updateRecommend');
    let recommends = await iqiyi.getRecommends();
    commit('updateCarousel', recommends[0].video_list);
    recommends.splice(0, 1);
    commit('updateRecommend', recommends);
  },
  async updateVideoList ({state, commit, dispatch}) {
    console.log('updateVideoList');
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
