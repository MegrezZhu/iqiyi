<template lang="html">
  <div class="video-list">
    <video-item v-for="video in videoList" :key="video.id" :video="video"></video-item>
  </div>
</template>

<script>
import videoItem from './video-item.vue';
export default {
  data () {
    return {};
  },
  computed: {
    videoList () {
      return this.$store.getters.currentVideos;
    }
  },
  components: {
    'video-item': videoItem
  },
  methods: {},
  async created () {
    await this.$store.dispatch('updateVideoList');
  }
};
</script>

<style lang="scss" type="text/scss">
.video-list {
  overflow: scroll;
  height: 100%;
}
</style>
