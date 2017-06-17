<template lang="html">
  <div class="navigation">
    <swiper :options="menuSwiperOption">
      <swiper-slide class="channel-list">
        <channel-list></channel-list>
      </swiper-slide>
      <swiper-slide>
        <video-list></video-list>
      </swiper-slide>
      <div class="mask-container">
        <div :class="[{ 'mask-all': isSwiperOpen }, 'mask']"></div>
      </div>
    </swiper>
  </div>
</template>

<script>
import channelList from './channel-list.vue';
import videoList from './video-list.vue';
export default {
  data () {
    return {
      videoList: [],
      isSwiperOpen: true,
      menuSwiperOption: {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0.1,
        slideToClickedSlide: true,
        onSlideChangeEnd: ({activeIndex}) => {
          this.isSwiperOpen = !activeIndex;
        }
      }
    };
  },
  components: {
    'channel-list': channelList,
    'video-list': videoList
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" type="text/scss">
.navigation {
  height: 100%;

  .swiper-wrapper, .swiper-container {
    height: 100%;
  }

  .channel-list {
    min-width: 150px;
    width: 30%;
  }
  .video-img {
    height: 100%;
  }
  .video-item {
    height: 100%;
  }
  .mask-container {
    z-index: 10;
  }
  .mask {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 30%;
    top: 0;
  }
  .mask-all {
    width: 70%;
  }
}
</style>
