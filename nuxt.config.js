export default defineNuxtConfig({
  compatibilityDate: '2024-09-20',
  // ssr: false,
  app: {
    head: {
      title: 'Sven Parker',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Sven Parker’s personal portfolio' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: 'Svenparker.com' },
        { property: 'og:url', content: 'https://svenparker.com' },
        { property: 'og:image', content: 'https://svenparker.com/ogp.jpg' },
        { property: 'profile:first_name', content: 'Sven' },
        { property: 'profile:last_name', content: 'Parker' },
        { name: 'msapplication-TileColor', content: '#392ecc' },
        { name: 'msapplication-config', content: 'browserconfig.xml' },
        { name: 'theme-color', content: '#392ecc' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: '4oeDbA1nkNSPNK4-7gB8Xc-MHrj-T-nrO4_S_263RU0' }
      ],
      link: [
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#392ecc' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito' }
      ]
    },
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#37D278' },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: '@use "~/assets/styles/_variables.scss" as *;',  // For global variables
          sassOptions: {
            outputStyle: 'compressed',
          },
        },
      },
    },
    build: {
      sourcemap: true,
    },
  },
  /*
  ** Transition options
  */
  // transition: {
  //   name: 'page',
  //   mode: 'in-out',
  //   duration: 200,
  //   appear: true
  // },
  router: {
    options: {
      linkExactActiveClass: 'active'
    }
  },
  plugins: [
    { src: '@/plugins/ga.js', mode: 'client' },
    { src: '@/plugins/hj.js', mode: 'client' },
    { src: '@/plugins/eventBus.js', mode: 'client' },
  ],
  modules: ['@vueuse/motion/nuxt', '@nuxt/image'],
  dir: {
    public: 'static'
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'show-up': {
            initial: {
              opacity: 0,
              y: -50,
            },
            'visible-once': {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 1.5,
              easing: 'ease-in',
            },
          },
          'show-down': {
            initial: {
              opacity: 0,
              y: 50,
            },
            'visible-once': {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 1.5,
              easing: 'ease-in',
            },
          }
        }
      }
    }
  }
})