const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en-US' },
      charset: 'utf-8',
      title: 'Test Subdomain',
    },
  },

  runtimeConfig: {
    public: {
      domain: isDev ? `http://localhost:${process.env.PORT}` : process.env.VITE_SITE_URL,
    },
  },

  extends: ['./_blog'],
});
