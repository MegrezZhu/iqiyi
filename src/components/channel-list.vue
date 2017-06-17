<template lang="html">
  <div class="channel-list">
    <mt-cell v-for="channel,index in channels"
             :key="channel.id"
             :title="channel.name"
             class="channel-item"
             @click.native="cellClick(index)"
             is-link>
    </mt-cell>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data () {
    return {};
  },
  computed: {
    ...mapState({
      channels: state => state.channels
    })
  },
  methods: {
    cellClick (index) {
      this.$store.commit('updateCurrentChannel', index);
      this.$emit('select', index);
    }
  },
  created () {
    this.$store.dispatch('updateChannels');
  }
};
</script>

<style lang="scss">
</style>
