<template>
  <div class="app-home-filmsbox">
    <app-films-item v-for="film in films" :key="film.id" :type="info.type" :film="film"></app-films-item>
    <div class="more-button">更多{{info.title}}电影</div>
  </div>
</template>
<script>
// https://m.maizuo.com/v4/api/film/now-playing?__t=1519
import AppFilmsItem from './FilmsItem'
import axios from 'axios'
export default {
  name: 'app-home-filmsbox',
  components: {
    AppFilmsItem
  },
  props: ['info'],
  data () {
    return {
      films: []
    }
  },
  methods: {
    getFilms () {
      axios.get(this.$root.config.host + '/mz/v4/api/film/' + this.info.url, {
        params: {__t: Date.now(), page: 1, count: this.info.count}
      }).then(res => {
        this.films = res.data.data.films
      })
    }
  },
  created () {
    this.getFilms()
  }
}
</script>

<style lang="scss" escoped>
.app-home-filmsbox {
  padding-top: 18px;
  margin-bottom: 10px;
  .more-button {
    width: 160px;
    line-height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
}
</style>
