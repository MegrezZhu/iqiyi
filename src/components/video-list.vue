<template lang="html">
  <div class="video-list">
    <div v-for="video in videoList" :key="video.id" class="video-item">
      <img class="video-img" v-lazy="video.img">
      <div class="video-info">
        <div class="video-name">{{video.title}}</div>
        <div class="video-score">评分：<span class="score-num">{{video.sns_score}}</span></div>
        <div class="video-time">上映时间：{{video.date_format}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    videoList () {
      return this.$store.getters.currentVideos;
    }
  },
  methods: {},
  async created () {
    await this.$store.dispatch('updateVideoList');
  }
};
</script>

<style lang="scss" type="text/scss">
.video-list {
  .video-img {
    height: 100%;
  }
  .video-item {
    height: 130px;
    margin-bottom: 8px;
    display: flex;
    background-color: #f2f2f2;
    .video-info {
      margin-left: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .video-name {
        font-size: 15pt;
        color: #6a9e1b;
      }
      .video-time {
        font-size: 12pt;
        color: #999999;
      }
      .video-score {
        font-size: 12pt;
        color: #999999;
        .score-num {
          font-family: Georgia, serif;
          font-size: 15pt;
          color: #fe8038;
        }
      }
    }
  }
}
</style>
