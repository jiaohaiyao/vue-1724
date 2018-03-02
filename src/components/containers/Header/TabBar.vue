<template>
  <div class="app-header-tabbar">
      <div class="tabbar-left">
          <div @click="toggleNav" class="nav-btn"><i class="iconfont icon-iconmore"></i></div>
          <div class="nav-title">{{title}}</div>
      </div>
      <div class="tabbar-right">
          <div class="nav-city">北京 <i class="iconfont">&#xe62d;</i></div>
          <div class="nav-user"><i class="iconfont">&#xe62f;</i></div>
      </div>
      <!--<div @click="toggleNav" class="mask" v-if="isNavShow"></div>-->
  </div>
</template>

<script>
import bus from '../../../modules/bus'
export default {
  name: 'app-header-tabbar',
  props: ['isNavShow', 'toggleNav'],
  data () {
    return {
      title: '卖座电影'
    }
  },
  mounted () {
    switch (this.$route.name) {
      case 'Home': this.title = '卖座电影'; break
      case 'Films': this.title = '全部影片'; break
      case 'Detail': this.title = '影片详情'; break
    }
    //  全局路由钩子，监听路由变化后更改title
    this.$router.beforeEach((to, from, next) => {
      switch (to.name) {
        case 'Home': this.title = '卖座电影'; break
        case 'Films': this.title = '全部影片'; break
      }
      next()
    })
    bus.$on('title-change', (title) => {
      this.title = title
    })
  }
}
</script>

<style lang="scss" scoped>
.app-header-tabbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    z-index: 500;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    display: flex;
    background: #282828;
    justify-content: space-between;
    .tabbar-left,.tabbar-right {
        display: flex;
        align-items: center;
    }
    .nav-btn {
        width: 48px;
        text-align: center;
        border-right: 1px solid #222;
        box-shadow: 1px 0 1px #363636;
        color: #999;
    }
    .nav-title {
        padding: 0 1em;
        float: left;
        font-size: 14px;
        color: #efefef;
        overflow: hidden;
    }
    .nav-city {
        display: flex;
        align-items: center;
        font-size: 14px;
        width:48px;
        text-align: center;
        justify-content: space-between;
        color: #999;
    }
    .nav-user {
        font-size: 14px;
        width: 48px;
        text-align: center;
        color: #999;
    }
}
</style>
