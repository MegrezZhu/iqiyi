<template lang="html">
  <div class="video-list">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide class="menu">Menu slide</swiper-slide>
      <swiper-slide>
        <div class="menu-button" :class="{ 'cross': menuCross }" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <swiper :options="swiperOption1">
          <swiper-slide v-for="(n,index) in 10">
            {{index}}
          </swiper-slide>
        </swiper>
        <!-- <swiper :options="swiperOption1">
          <swiper-slide v-for="video in videoList" :key="video.id">
            {{video.id}}
          </swiper-slide>
        </swiper> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuCross: false,
      videoList: [],
      swiperOption: {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0.00000000000001,
        slideToClickedSlide: true
      },
      swiperOption1: {
        direction: 'vertical'
      }
    };
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
.menu {
  min-width: 100px;
  width: 70%;
  max-width: 320px;
  background-color: #2C8DFB!important;
  color: #fff;
}
.content {
  width: 100%;
}
.menu-button {
  position: absolute;
  top: 0px; left: 0px;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: .3s;
  transition: .3s;
  background-color: #2C8DFB;
  /*margin: 14px;
  border-radius: 5px;*/
}
.menu-button .bar:nth-of-type(1) {
  margin-top: 0px;
}
.menu-button .bar:nth-of-type(3) {
  margin-bottom: 0px;
}
.bar {
  position: relative;
  display: block;
  width: 50px;
  height: 5px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  -webkit-transition: .3s;
  transition: .3s;
}
.menu-button:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(1.5px) rotate(-4.5deg);
  -ms-transform: translateY(1.5px) rotate(-4.5deg);
  transform: translateY(1.5px) rotate(-4.5deg);
}
.menu-button:hover .bar:nth-of-type(2) {
  opacity: .9;
}
.menu-button:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-1.5px) rotate(4.5deg);
  -ms-transform: translateY(-1.5px) rotate(4.5deg);
  transform: translateY(-1.5px) rotate(4.5deg);
}
.cross .bar:nth-of-type(1) {
  -webkit-transform: translateY(15px) rotate(-45deg);
  -ms-transform: translateY(15px) rotate(-45deg);
  transform: translateY(15px) rotate(-45deg);
}
.cross .bar:nth-of-type(2) {
  opacity: 0;
}
.cross .bar:nth-of-type(3) {
  -webkit-transform: translateY(-15px) rotate(45deg);
  -ms-transform: translateY(-15px) rotate(45deg);
  transform: translateY(-15px) rotate(45deg);
}
.cross:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(13.5px) rotate(-40.5deg);
  -ms-transform: translateY(13.5px) rotate(-40.5deg);
  transform: translateY(13.5px) rotate(-40.5deg);
}
.cross:hover .bar:nth-of-type(2) {
  opacity: .1;
}
.cross:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-13.5px) rotate(40.5deg);
  -ms-transform: translateY(-13.5px) rotate(40.5deg);
  transform: translateY(-13.5px) rotate(40.5deg);
}
</style>
