import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css:[
    '~/assets/main.scss'
  ]
});
