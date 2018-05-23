module.exports = {

  css: [
      'assets/main.scss'
  ],

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
      { name: 'theme-color', content: '#2ecc71'}
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2ecc71' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#37D278' },

  router: { linkExactActiveClass: 'active' },

  transition: {
    name: 'page',
    mode: 'out-in',
    enterClass: 'ZYZ',
    afterEnter: `afterEnter (el) {
      console.log('Before enter...');
    }`,
    duration: 1000,
    appear: true
  },
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
  }
}
