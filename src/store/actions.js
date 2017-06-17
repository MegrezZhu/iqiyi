import iqiyi from '@/utils/iqiyi';
let updateChannels;

export default {
  async updateChannels ({commit}) {
    if (updateChannels) return updateChannels;
    updateChannels = iqiyi.getChannels();
    let channels = await updateChannels;
    updateChannels = null;
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
    let {video_list} = await iqiyi.getChannelDetail(name);
    video_list.forEach(video => {
      video.img = video.img.substr(0, video.img.length - 4) + '_480_360.jpg?sign=iqiyi';
    });
    commit('updateVideoList', {
      channel: state.currentChannel,
      list: video_list
    });
  }
};
