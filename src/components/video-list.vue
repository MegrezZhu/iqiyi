<template lang="html">
  <div class="video-list">
    <swiper :options="menuSwiperOption" ref="swiper">
      <swiper-slide class="channel-list">
        <channel-list>
        </channel-list>
      </swiper-slide>
      <swiper-slide>
        <swiper :options="videoListSwiperOption">
          <swiper-slide v-for="video in videoList" :key="video.id">
            <img class="video-img" v-lazy="video.img">
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import channelList from './channel-list.vue';
export default {
  data () {
    return {
      videoList: [],
      menuSwiperOption: {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0.1,
        slideToClickedSlide: true
      },
      videoListSwiperOption: {
        direction: 'vertical',
        height: 300,
        centeredSlides: true,
        spaceBetween: 20
      }
    };
  },
  components: {
    'channel-list': channelList
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper;
    }
  },
  methods: {
    toggleMenu () {
      if (this.swiper.previousIndex === 0) this.swiper.slidePrev();
    }
  },
  async created () {
    await this.$store.dispatch('updateVideoList');
    let state = this.$store.state;
    this.videoList = state.videoList[state.currentChannel];
  }
};
</script>

<style lang="scss">
.channel-list {
  min-width: 100px;
  width: 20%;
}
.video-img {
  height: 100%;
}
</style>
