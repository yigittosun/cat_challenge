module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'nuxt',
      '@nuxtjs',
      'plugin:nuxt/recommended',
      'eslint:recommended',
      'plugin:vue/recommended',
    ],
    plugins: ['vue'],
  };
  