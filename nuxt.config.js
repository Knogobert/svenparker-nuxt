module.exports = {

  build: {
    vendor: ['vuesax']
  },
  plugins: ['~/plugins/vuesax'],

  css: [
      'assets/main.css'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sven Parker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
