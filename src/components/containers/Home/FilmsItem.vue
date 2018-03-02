<template>
  <div @click="toDetail(film.id, film.name)" class="app-home-filmsitem">
      <img width="100%" :src="film.cover.origin" alt="">
      <div v-if="type==='hot'" class="info-box" type="hot">
        <div class="film-info">
          <p class="title">{{film.name}}</p>
          <p class="desc">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</p>
        </div>
        <span class="grade">{{film.grade}}</span>
      </div>
      <div v-else class="info-box" type="coming">
        <div class="film-info">
          <p class="title">{{film.name}}</p>
        </div>
        <span class="date">{{film.premiereAt}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'app-home-filmsitem',
  props: ['type', 'film'],
  methods: {
    toDetail (id, name) {
      this.$router.push({name: 'Detail', params: {id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.app-home-filmsitem {
  margin: 0 17px 17px 17px;
  background-color: #f9f9f9;
  -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
  -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
  box-shadow: 0.5px 0.5px 1px #a8a8a8;
  cursor: pointer;
  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;
  }
  .info-box[type='hot'] .film-info,.info-box[type='coming'] .film-info {
    font-size: 12px;
    color: #333;
  .desc{
    color: #999;
    }
  }
  .info-box[type='hot'] .grade {
    color: #f78360;
    font-size: 18px;
  }
  .info-box[type='coming'] .date {
    font-size: 10px;
    color: rgb(245, 162, 125);
    margin-right: 20px;
  }
}
</style>
