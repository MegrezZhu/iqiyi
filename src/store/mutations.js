export default {
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
    state.videoList = {
      ...state.videoList,
      [channel]: list
    };
  },
  updateCurrentChannel (state, currentChannel) {
    state.currentChannel = currentChannel;
  }
};
