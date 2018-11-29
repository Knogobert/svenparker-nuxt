module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sven Parker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sven Parker’s personal portfolio'
      },
      { property: 'og:type', content: 'profile' },
      { property: 'og:title', content: 'Svenparker.com' },
      { property: 'og:url', content: 'https://svenparker.com' },
      { property: 'og:image', content: 'https://svenparker.com/ogp.jpg' },
      { property: 'profile:first_name', content: 'Sven' },
      { property: 'profile:last_name', content: 'Parker' },
      { name: 'msapplication-TileColor', content: '#2ecc71' },
      { name: 'msapplication-config', content: 'browserconfig.xml' },
      { name: 'theme-color', content: '#2ecc71' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: '4oeDbA1nkNSPNK4-7gB8Xc-MHrj-T-nrO4_S_263RU0'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2ecc71' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#37D278' },

  /*
  ** Global CSS
  */
  css: ['assets/main.scss'],

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
  ** Routing options
  */
  router: { linkExactActiveClass: 'active' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/hj.js', ssr: false },
    { src: '~/plugins/eventBus.js', ssr: false },
    { src: '~/plugins/smoothScroll-polyfill.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
          // options: {
          //   fix: true
          // }
        })
      }
    }
  }
}
