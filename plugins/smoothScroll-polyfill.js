import Vue from 'vue'
import smoothscroll from 'smoothscroll-polyfill';

const smoothScroll = {}

smoothScroll.install = function (Vue) {
    smoothscroll.polyfill();
}

Vue.use(smoothScroll)