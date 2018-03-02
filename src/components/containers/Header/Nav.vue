<template>
  <div class="app-header-nav">
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <nav v-if="isNavShow">
        <ul class="nav-list">
          <li @click="toggleNav" v-for="nav in navs" :key="nav.id" class="nav-item">
            <router-link :to="nav.path">{{nav.title}}<i class="iconfont">&#xe62e;</i></router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="mask" v-if="isNavShow" @click="toggleNav"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-header-nav',
  props: ['isNavShow', 'toggleNav'],
  data () {
    return {
      navs: [
        {id: 1, title: '首页', path: '/home'},
        {id: 2, title: '影片', path: '/films'},
        {id: 3, title: '影院', path: '/cinema'},
        {id: 4, title: '我的', path: '/mine'},
        {id: 5, title: '二级路由示例', path: '/second'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 499;
}
nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2.65rem;
    z-index: 10;
    background: #282828;
    padding-top: 50px;
    animation-duration: 0.5s;
}
.mask {
  z-index: 9;
  background:rgba(0,0,0,0.5);
  height: 100vh;
  animation-duration: 0.5s;
}
.nav-list {
  border-top: 1px solid #222;
  li{
    line-height: 50px;
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 16px;
      border-bottom: 1px dotted #333;
      color: #999;
    }
  }
}
</style>
