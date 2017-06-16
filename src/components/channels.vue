<template lang="html">
  <div class="channels">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in carousel" :key="item.id">
        <img class="carousel-img" :src="item.img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <mt-navbar @click.native="changeChannel" v-model="selectedChannel">
      <mt-tab-item v-for="item,index in channels" :key="item.id" :id="index" class="channel-tag">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <div class="channel-list">
      <div v-for="item in videoList[currentChannelName]" :key="item.id" class="video-item">
        <img :src="item.img" class="video-img">
        <div class="video-title">
          {{item.title}}
        </div>
        <div class="video-score">
          {{item.sns_score}}
        </div>
        <div class="video-time">
          {{item.date_format}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        loop: true
      },
      selectedChannel: 0
    };
  },
  computed: {
    ...mapState({
      carousel: state => state.main.carousel,
      channels (state) {
        let channels = state.main.channels;
        return channels.slice(0, 5);
      },
      videoList: state => state.main.videoList
    }),
    currentChannelName () {
      return this.channels[this.selectedChannel].name;
    }
  },
  methods: {
    async changeChannel () {
      let channel = this.channels[this.selectedChannel].name;
      if (!this.videoList[channel]) {
        await this.$store.dispatch('updateVideoList', {
          name: this.channels[this.selectedChannel].name
        });
      }
    }
  },
  async created () {
    this.$store.dispatch('updateRecommend');
    await this.$store.dispatch('updateChannels');
    this.selectedChannel = 0;
    this.changeChannel(this.selectedChannel);
  }
};
</script>

<style lang="scss">
.channels {
  .carousel-img {
    width: 100%;
  }
  .channel-tag {
    .mint-tab-item-label {
      font-size: 20pt;
    }
  }
  .video-item {
    height: 300px;
    padding: 10px 0;
  }
  .video-img {
    display: block;
    height: 100%;
    float: left;
  }
}
</style>
