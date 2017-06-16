<template>
  <div id="app">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in carousel" :key="item.id">
        <img class="carousel-img" :src="item.img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- <router-view></router-view> -->
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
      }
    };
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
.carousel-img {
  width: 100%;
}
</style>
