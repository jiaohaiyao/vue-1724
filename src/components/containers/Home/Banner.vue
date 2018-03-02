<template>
  <div class="swiper-container app-home-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="billboard in billboards" :key="billboard.id">
        <img width="100%" :src="billboard.imageUrl" alt="..." :title="billboard.name">
      </div>
    </div>
  </div>
</template>
<script>
// https://m.maizuo.com/v4/api/billboard/home?__t=1519790044445
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'app-home-banner',
  data () {
    return {
      billboards: []
    }
  },
  methods: {
    getBillBoards () {
      axios.get(this.$root.config.host + '/mz/v4/api/billboard/home?', {
        params: {__t: Date.now()}
      }).then(res => {
        // console.log(res.data.data.billboards)
        this.billboards = res.data.data.billboards
      })
    }
  },
  created () {
    this.getBillBoards()
  },
  updated () {
    /* eslint-disable no-new */
    new Swiper('.app-home-banner', {
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%;
}
</style>
