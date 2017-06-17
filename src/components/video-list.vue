<template lang="html">
  <div class="video-list">
    <video-item v-for="video in videoList" :key="video.id" :video="video"></video-item>
  </div>
</template>

<script>
import videoItem from './video-item.vue';
export default {
  data () {
    return {
      videoList: []
    };
  },
  components: {
    'video-item': videoItem
  },
  methods: {},
  async created () {
    await this.$store.dispatch('updateVideoList');
    let state = this.$store.state;
    this.videoList = state.videoList[state.currentChannel];
  }
};
</script>

<style lang="scss">
.video-list {
}
</style>
