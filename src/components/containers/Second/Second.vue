<template>
  <div class="main-box second">
      second
      <router-link to="/second/secondOne">SecondOne</router-link>
      <router-link to="/second/secondTwo">SecondTwo</router-link>
      <hr>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'second'
}
</script>

<style>
</style>
