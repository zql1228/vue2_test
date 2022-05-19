export default {
  install(Vue) {
    Vue.filter('mySlice', function (val) {
      return val.slice(0, 4)
    })
    Vue.prototype.hello = () => {
      console.log('hello')
    }
  },
}
