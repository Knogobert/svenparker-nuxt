module.exports = {
  mode: 'spa',
  /*
  ** Added css/scss
  */
  css: ['assets/main.scss'],

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sven Parker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal portfolio' },
      { name: 'msapplication-TileColor', content: '#2ecc71'},
      { name: 'msapplication-config', content: 'browserconfig.xml'},
      { name: 'theme-color', content: '#2ecc71'},
      { name: 'robots', content: 'noindex' },
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2ecc71' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow|Quicksand' }
    ],
    // script: [
    //   // {
    //   //   src: 'https://www.googletagmanager.com/gtag/js?id=UA-9151956-1',
    //   //   async: 1
    //   // },
    //   // {
    //   //   innerHTML: 'window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag("js", new Date()); gtag("config", "UA-9151956-1");',
    //   //   type: 'text/javascript'
    //   // },
    //   // {
    //   //   innerHTML: '(function (h, o, t, j, a, r) { h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) }; h._hjSettings = { hjid: 116369, hjsv: 6 }; a = o.getElementsByTagName("head")[0]; r = o.createElement("script"); r.async = 1; r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv; a.appendChild(r); })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");',
    //   //   type: 'text/javascript',
    //   //   charset: 'utf-8'
    //   // }
    // ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#37D278' },

  /*
  ** Routing options
  */
  router: { linkExactActiveClass: 'active' },

  /*
  ** Transition options
  */
  // transition: {
  //   name: 'page',
  //   mode: 'in-out',
  //   duration: 200,
  //   appear: true
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/hj.js', ssr: false },
    { src: '~/plugins/eventBus.js', ssr: false },
    { src: '~/plugins/smoothScroll-polyfill.js', ssr: false }
  ]
}