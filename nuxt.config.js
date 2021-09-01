// import logger from 'connect-logger'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mal-api',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  auth: {
    strategies: {
      discord: {
        clientId: process.env.Discord_CLIENTID,
        clientSecret: process.env.Discord_CLIENTSECRET,
      },
      mal: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://myanimelist.net/v1/oauth2/authorize',
          token: 'https://myanimelist.net/v1/oauth2/token',
          // userInfo: undefined,
          // logout: undefined,
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        // accessType: undefined,
        // redirectUri: 'http://localhost:3000/login',
        // logoutRedirectUri: undefined,
        clientId: process.env.MAL_CLIENTID,
        clientSecret: process.env.MAL_CLIENTSECRET,
        scope: ['openid', 'profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: 'plain',
        // responseMode: '',
        // acrValues: '',
        // autoLogout: false
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // serverMiddleware: [logger({ format: '%date %status %method %url (%time)' })],
}
