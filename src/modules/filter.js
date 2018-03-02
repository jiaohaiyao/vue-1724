import Vue from 'vue'
Vue.filter('date', function (value, modifiter) {
  let date = new Date(value)
  return (date.getMonth() + 1) + '月' + date.getDate() + '日' + (modifiter ? '上映' : '')
})
