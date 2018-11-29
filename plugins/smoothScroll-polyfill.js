import Vue from 'vue'
import smoothScrollPkg from 'smoothscroll-polyfill'

const smoothScroll = {}

smoothScroll.install = function(Vue) {
  smoothScrollPkg.polyfill()
}

Vue.use(smoothScroll)
