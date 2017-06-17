<template lang="html">
  <div class="navigation">
    <swiper :options="menuSwiperOption">
      <swiper-slide class="channel-list">
        <channel-list></channel-list>
      </swiper-slide>
      <swiper-slide>
        <video-list></video-list>
      </swiper-slide>
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
      menuSwiperOption: {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0.1,
        slideToClickedSlide: true
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

<style lang="scss">
.navigation {
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
}
</style>
