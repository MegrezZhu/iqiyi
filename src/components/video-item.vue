<template lang="html">
  <div class="video">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="video-item">
          <img class="video-img" v-lazy="video.img">
          <div class="video-info">
            <div class="video-name">{{video.title}}</div>
            <div class="video-score">评分：<span class="number">{{video.sns_score}}</span></div>
            <div class="video-time">上映时间：{{video.date_format}}</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="video-item">
          <img class="video-img-bg" :src="video.img">
          <div class="video-img-mask"></div>
          <div class="play-button">立即播放</div>
          <div class="video-detail">
            <div class="video-name">{{video.title}}</div>
            <div class="video-score">评分：<span class="number">{{video.sns_score}}</span></div>
            <div class="video-score">播放：<span class="number">{{video.play_count_text}}</span></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['video'],
  data () {
    return {
      swiperOption: {
        effect: 'flip'
      }
    };
  },
  mounted () {
  }
};
</script>

<style lang="scss">
.video {
  .video-item {
    position: relative;
    height: 130px;
    margin-bottom: 8px;
    display: flex;
    background-color: #f2f2f2;
    overflow: hidden;
  }
  .video-img {
    height: 100%;
  }
  .video-img-bg {
    position: absolute;
    display: block;
    margin: auto;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .video-img-mask {
    position: absolute;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
  }
  .video-detail {
    position: relative;
    padding: 3%;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    .video-name {
      font-size: 20pt;
      color: white;
      font-weight: normal;
    }
    .video-score {
      color: #c1c1c1;
    }
    .number {
      font-size: 19pt;
    }
  }
  .play-button {
    position: absolute;
    right: 8%;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 90px;
    height: 40px;
    background-color: #57a800;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 13.5pt;
    border-radius: 8%;
  }
  .video-info {
    margin-left: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .video-name {
    font-size: 16pt;
    font-weight: bold;
    color: #63b504;
  }
  .video-time {
    font-size: 12pt;
    color: #999999;
  }
  .video-score {
    font-size: 12pt;
    color: #999999;
  }
  .number {
    font-family: Georgia, serif;
    font-size: 15pt;
    color: #fe8038;
  }
}
</style>
