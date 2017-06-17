<template lang="html">
  <div class="channel-list">
    <swiper :options="swiperOption" ref="channelSwiper">
      <swiper-slide v-for="(channel, index) in channels" :key="channel.id" class="channel">
        <div>{{channel.name}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          direction: 'vertical',
          height: 100,
          onTransitionStart: swiper => {
            if (this.activeIndex !== swiper.activeIndex) {
              let index = this.activeIndex = swiper.activeIndex;
              let currentChannel = this.channels[this.activeIndex];
              this.$emit('changed', {
                id: this.activeIndex,
                channel: currentChannel
              });
              console.log(currentChannel);
              this.$store.commit('updateCurrentChannel', index);
              this.$store.dispatch('updateVideoList');
            }
          }
        },
        activeIndex: 0
      };
    },
    computed: {
      ...mapState({
        channels: state => state.channels
      }),
      swiper () {
        return this.$refs.channelSwiper.swiper;
      }
    },
    methods: {},
    created () {
      this.$store.dispatch('updateChannels');
    }
  };
</script>

<style lang="scss" type="text/scss">
  html, body {
    position: relative;
    height: 100%;
  }

  .channel-list {
    .swiper-slide-active.channel {
      box-shadow: 0 0 30px 1px greenyellow inset;
      z-index: 3;
    }

    .channel {
      background: #262523;
      color: white;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18pt;
      text-align: center;
    }
  }
</style>
