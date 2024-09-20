/* eslint-disable */
// @ts-ignore-next-line
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV !== 'production') return

  nuxtApp.hook('app:mounted', () => {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-9151956-1', 'auto')

    nuxtApp.hook('page:finish', (context) => {
      ga('set', 'page', context.path)
      ga('send', 'pageview', {
        'Branch': '{{ BRANCH }}'
      })
    })
  })
})