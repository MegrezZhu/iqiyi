<template>
  <div id="app">
    <mt-swipe class="carousel" :auto="5000">
      <mt-swipe-item v-for="item in carousel" :key="item.id">
        <img class="carousel-img" :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {};
  },
  computed: {
    ...mapState({
      carousel: state => state.main.carousel
    })
  },
  methods: {},
  created () {
    this.$store.dispatch('updateRecommend');
  }
};
</script>

<style lang="scss" scoped>
// .carousel {
//   height: 500px;
// }
.carousel-img {
  width: 100%;
}
</style>
