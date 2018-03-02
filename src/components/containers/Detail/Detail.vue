<template>
  <div class="main-box detail">
    <div class="banner">
      <img width="100%" :src="film.cover.origin" alt="">
    </div>
    <div class="content">
      <div class="desc-box">影片简介</div>
      <p class="content-info">
          <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 ：</span><span>{{film.director}}</span>
      </p>
      <p class="content-info">
          <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 ：</span><span>{{ actorNames }}</span>
      </p>
      <p class="content-info">
          <span>地区语言：</span><span>{{film.language}}</span>
      </p>
      <p class="content-info">
          <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型 ：</span><span>{{film.category}}</span>
      </p>
      <p class="content-info">
          <span>上映日期：</span><span>{{film.premiereAt | date(true)}}</span>
      </p>
      <p class="content-intro">{{film.synopsis}}</p>
    </div>
    <div class="operation">
      <button class="order-btn">立即购票</button>
    </div>
  </div>
</template>

<script>
// https://m.maizuo.com/v4/api/film/4000?__t=15198202678
import axios from 'axios'
import bus from '../../../modules/bus'
export default {
  name: 'detail',
  props: ['id'],
  data () {
    return {
      film: {
        actors: [],
        cover: {}
      }
    }
  },
  computed: {
    actorNames () {
      //  console.log(typeof(this.film.actors))
      let namestr = ''
      this.film.actors.map(actor => {
        namestr += actor.name + ' | '
        // console.log(actor)
      })
      return namestr
    }
  },
  methods: {
    getFilmInfo () {
      axios.get(this.$root.config.host + '/mz/v4/api/film/' + this.id, {
        params: {__t: Date.now()}
      }).then(res => {
        this.film = res.data.data.film
        //  通知TabBar组件更改内容
        bus.$emit('title-change', this.film.name)
      })
    }
  },
  created () {
    this.getFilmInfo()
  }
}
</script>

<style lang="scss" scoped>
.detail {
  color: #333;
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 56.25%;
  }
  .content {
    .desc-box {
      margin:16px auto;
      border-left: 16px solid rgb(228, 200, 156);
      font-size: 16px;
      padding-left: 4px;
    }
    .content-info {
      height: 18px;
      overflow: hidden;
      margin-bottom: 10px;
      padding-left: 20px;
    }
    .content-intro {
      margin-bottom: 80px;
      padding: 0 20px;
    }
  }
  .operation {
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
    .order-btn {
      font-size: 14px;
      min-width: 156px;
      height: 36px;
      line-height: 36px;
      border: none;
      background: #fe8233;
      border-radius: 18px;
      margin: 0;
      padding: 0;
      color: #fff;
    }
  }
}
</style>
