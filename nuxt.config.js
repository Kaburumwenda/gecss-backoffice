// const src_key = "data";
// const views_scr = 'views';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 // ssr: false,
 ssr: false,
 target:'static',
 loading: false,
  
  head: {
    title: 'GECSS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/scss/main.scss',
    '~/assets/css/general.css',
    '~/assets/css/setup.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/directives/clickRipple.js' },
    { src: '~/directives/toggleClass.js' },
    { src: '~/plugins/components.global.js' },
    { src: '~/plugins/mixins/validation.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/encryption.js' },
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      name: 'GECSS',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  
  bootstrapVue: {
		icons: true
	  },

  router: {
		middleware: [ 'redirect'],
		
		// base: process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '/' : '/' + dist
	},


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true, 192.168.1.16
    baseURL:"https://aws.gecss.v3engine.gecss-ke.com/"
    //baseURL:"http://192.168.1.19/"
  },


  // proxy: {
  //   '/v1/': 'http://192.168.1.14',
  //   },


  server: {
		port: 81,
		host: '0.0.0.0',
		timing: false
	  },

    layouts: {
      default: '~/layouts/empty.vue',
    },

  
    // dir: {
    //   pages: `${views_scr}/pages`,
    //   layouts: `${views_scr}/layouts`,
    //   store:`${src_key}/store`, 
    //   middleware:`${src_key}/middleware`,
    //   static:'assets/static',
    //   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
 // build: {
    // postcss: {
    //   plugins: {
    //     "postcss-custom-properties": false
    //   },
    // },
 // }
 build: {
  
},

}
